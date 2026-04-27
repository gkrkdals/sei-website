import {prisma} from '@/lib/prisma';
import { NextResponse } from 'next/server';

// 1. 목록 가져오기
export async function GET() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'asc' } });
  return NextResponse.json(products);
}

// 2. 새 제품 등록
export async function POST(req: Request) {
  const { title, slug, description } = await req.json();
  const product = await prisma.product.create({ data: { title, slug, description } });
  return NextResponse.json(product);
}

// 3. 제품 수정
export async function PATCH(req: Request) {
  const { id, title, slug, description } = await req.json();
  const product = await prisma.product.update({
    where: { id },
    data: { title, slug, description }
  });
  return NextResponse.json(product);
}

// 4. 제품 삭제 (쿼리 스트링으로 ID 수신)
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'ID 필요' }, { status: 400 });
  
  await prisma.product.delete({ where: { id: parseInt(id) } });
  return NextResponse.json({ success: true });
}