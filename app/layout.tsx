import './globals.css';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Header from './Header';
import { Providers } from './providers';

export const metadata = {
  title: 'SEI Corporation | 글로벌 가치 창조 기업',
  description: '첨단 정밀 기술•제품과 신뢰를 연결하는 글로벌 파트너, 에스이아이(주)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans antialiased flex flex-col min-h-screen selection:bg-blue-200 dark:selection:bg-blue-800 selection:text-blue-900 dark:selection:text-blue-100 overflow-x-hidden transition-colors duration-200">
        <Providers>
        
          {/* 최상단 마이크로 유틸리티 바 */}
          <div className="bg-blue-950 dark:bg-stone-900 text-blue-50/80 text-xs py-2 px-6 hidden sm:block transition-colors">
          <div className="max-w-6xl mx-auto flex justify-between items-center tracking-wide">
            <span>장비, 특수 잉크 및 필름</span>
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
        <footer className="bg-stone-950 dark:bg-stone-950 text-stone-400 dark:text-stone-500 py-16 border-t border-stone-900 dark:border-stone-900">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6 inline-block">
                <span className="text-3xl font-extrabold text-white dark:text-stone-100 tracking-tighter">SEI</span>
                <span className="text-sm font-semibold text-stone-500 dark:text-stone-600 border-l border-stone-700 dark:border-stone-800 pl-2 leading-tight">Corporation</span>
              </Link>
              <p className="text-sm leading-relaxed max-w-sm mb-6">
                에스이아이 주식회사는 글로벌 파트너십을 바탕으로 최상의 산업용 장비와 솔루션을 제공하며, 고객과 함께 성장하는 진정한 가치 창조 기업입니다.
              </p>
            </div>

            <div>
              <h3 className="text-white dark:text-stone-100 font-bold mb-6 tracking-wide">Contact</h3>
              <ul className="text-sm space-y-3">
                <li className="flex items-start gap-2">
                  <MapPinIcon className="w-5 h-5 text-stone-500 dark:text-stone-600 shrink-0"/> 
                  <span>서울 마포구 토정로 304,<br/>용현빌딩 402호</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-stone-500 dark:text-stone-600 shrink-0"/> 
                  <span>010-3122-1428</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white dark:text-stone-100 font-bold mb-6 tracking-wide">Quick Links</h3>
              <ul className="text-sm space-y-3">
                <li><Link href="/profile" className="hover:text-blue-400 transition-colors">기업현황</Link></li>
                <li><Link href="/solutions/automotive" className="hover:text-blue-400 transition-colors">자동차산업</Link></li>
                <li><Link href="/products/silkscreen" className="hover:text-blue-400 transition-colors">특수 잉크 제품군</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800/50 dark:border-stone-900 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} SEI Corporation. All rights reserved.</p>
          </div>
        </footer>
        </Providers>
      </body>
    </html>
  );
}