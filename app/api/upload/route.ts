import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    // 1. 요청에서 파일 데이터 추출
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, error: '파일이 없습니다.' }, { status: 400 });
    }

    // 2. 파일을 버퍼 형태로 변환
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 3. 파일명 중복 방지를 위한 이름 생성 (시간값 + 원래 이름)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    // 한글 파일명 오류 방지를 위해 영문/숫자만 남기거나 확장자만 유지
    const extension = file.name.split('.').pop(); 
    const filename = `image_${uniqueSuffix}.${extension}`;

    // 4. 저장할 경로 지정 (앞서 마운트한 public/uploads 폴더)
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    const filepath = path.join(uploadDir, filename);

    // 5. 서버 하드디스크에 파일 쓰기
    await writeFile(filepath, buffer);

    // 6. 브라우저에서 접근할 수 있는 URL 반환
    const fileUrl = `/uploads/${filename}`;
    return NextResponse.json({ success: true, url: fileUrl });

  } catch (error) {
    console.error("이미지 업로드 에러:", error);
    return NextResponse.json({ success: false, error: '서버 업로드 실패' }, { status: 500 });
  }
}