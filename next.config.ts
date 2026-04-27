import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', 
  
  // (선택) 만약 외부 이미지 URL을 불러온다면 아래 설정이 필요할 수 있습니다.
  images: {
    unoptimized: true, // 로컬 볼륨 마운트된 이미지를 바로 띄울 때 유리함
  },
};

export default nextConfig;
