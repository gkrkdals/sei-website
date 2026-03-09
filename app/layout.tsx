import './globals.css';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Header from './Header'; // 방금 만든 헤더 컴포넌트 불러오기

export const metadata = {
  title: 'SEI Corporation | 글로벌 가치 창조 기업',
  description: '창조의 의미와 가치가 있는 기업, 에스이아이(주)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-stone-50 text-stone-900 font-sans antialiased flex flex-col min-h-screen selection:bg-red-200 selection:text-red-900 overflow-x-hidden">
        
        {/* 최상단 마이크로 유틸리티 바 (다크 버건디) */}
        <div className="bg-red-950 text-red-50/80 text-xs py-2 px-6 hidden sm:block">
          <div className="max-w-6xl mx-auto flex justify-between items-center tracking-wide">
            <span>고품질 산업용 장비 및 특수 잉크 공급 전문기업</span>
            <div className="flex space-x-6">
              <span className="flex items-center gap-1"><PhoneIcon className="w-3 h-3"/> 010-3122-1428</span>
              <Link href="/location" className="flex items-center gap-1 hover:text-white transition-colors">
                <MapPinIcon className="w-3 h-3"/> 오시는 길
              </Link>
            </div>
          </div>
        </div>

        {/* 여기서 클라이언트 컴포넌트인 Header를 렌더링합니다 */}
        <Header />

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-grow w-full flex flex-col">
          {children}
        </main>

        {/* 모던 다크 웜스톤(갈색빛) 푸터 */}
        <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6 inline-block">
                <span className="text-3xl font-extrabold text-white tracking-tighter">SEI</span>
                <span className="text-sm font-semibold text-stone-500 border-l border-stone-700 pl-2 leading-tight">Corporation</span>
              </Link>
              <p className="text-sm leading-relaxed max-w-sm mb-6">
                에스이아이 주식회사는 글로벌 파트너십을 바탕으로 최상의 산업용 장비와 솔루션을 제공하며, 고객과 함께 성장하는 진정한 가치 창조 기업입니다.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 tracking-wide">Contact</h3>
              <ul className="text-sm space-y-3">
                <li className="flex items-start gap-2">
                  <MapPinIcon className="w-5 h-5 text-stone-500 shrink-0"/> 
                  <span>서울 마포구 토정로 304,<br/>용현빌딩 402호</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-stone-500 shrink-0"/> 
                  <span>010-3122-1428</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 tracking-wide">Quick Links</h3>
              <ul className="text-sm space-y-3">
                <li><Link href="/profile" className="hover:text-red-400 transition-colors">기업현황</Link></li>
                <li><Link href="/solutions/laser" className="hover:text-red-400 transition-colors">레이저 장비 솔루션</Link></li>
                <li><Link href="/products/silkscreen" className="hover:text-red-400 transition-colors">특수 잉크 제품군</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800/50 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} SEI Corporation. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}