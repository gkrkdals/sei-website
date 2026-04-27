"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  // 🌟 DB에서 가져온 동적 제품 목록을 담을 상태
  const [dbProducts, setDbProducts] = useState<{ id: number, title: string, slug: string }[]>([]);

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenAccordion(null);
  }, [pathname]);

  // 🌟 헤더가 렌더링될 때 백엔드 API에서 제품 목록 가져오기
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const data = await res.json();
          setDbProducts(data);
        }
      } catch (error) {
        console.error("제품 목록을 불러오지 못했습니다.", error);
      }
    };
    fetchProducts();
  }, []);

  const toggleAccordion = (menu: string) => {
    setOpenAccordion(openAccordion === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-stone-200/50 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <img src="/logo.png" alt="SEI Logo" className="w-40 h-40 object-contain group-hover:animate-pulse transition-transform" />
        </Link>

        {/* --- 데스크톱 GNB (PC에서만 보임) --- */}
        <nav className="hidden md:flex space-x-10 h-full">
          {/* 1. 회사 소개 */}
          <div className="group relative h-full flex items-center">
            <span className="cursor-pointer font-bold text-stone-700 group-hover:text-blue-700 transition-colors">회사 소개</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white/95 backdrop-blur-sm border border-stone-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-2 overflow-hidden z-50 p-2">
              <Link href="/" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium rounded-xl transition-colors">회사소개</Link>
              <Link href="/profile" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium rounded-xl transition-colors">기업현황</Link>
              <Link href="/vision" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium rounded-xl transition-colors">비전</Link>
            </div>
          </div>

          {/* 2. 솔루션 소개 */}
          <div className="group relative h-full flex items-center">
            <span className="cursor-pointer font-bold text-stone-700 group-hover:text-blue-700 transition-colors">솔루션 소개</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white/95 backdrop-blur-sm border border-stone-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-2 overflow-hidden z-50 p-7">
              <div className="grid grid-cols-5 gap-5">
                {[
                  { href: "/solutions/automotive", label: "자동차산업", img: "/images/headers/solution1.png" },
                  { href: "/solutions/card", label: "신용카드 및 ID카드", img: "/images/headers/solution2.png" },
                  { href: "/solutions/pad-printing", label: "인쇄산업", img: "/images/headers/solution3.png" },
                  { href: "/solutions/polishing", label: "PVD코팅", img: "/images/headers/solution4.png" },
                  { href: "/solutions/high-security", label: "High Security", img: "/images/headers/solution5.png" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="group/item flex flex-col gap-3.5">
                    <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-stone-100 shadow-sm bg-stone-50 group-hover/item:shadow-lg transition-all">
                      <img 
                        src={item.img} 
                        alt={item.label} 
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-sm font-bold text-stone-700 group-hover/item:text-blue-700 text-center transition-colors">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 🌟 3. 제품 소개 (DB 연동 동적 렌더링) */}
          <div className="group relative h-full flex items-center">
            <span className="cursor-pointer font-bold text-stone-700 group-hover:text-blue-700 transition-colors">제품 소개</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-sm border border-stone-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-2 overflow-hidden z-50 p-2">
              
              {/* DB에 데이터가 없을 때의 안내 문구 */}
              {dbProducts.length === 0 ? (
                <div className="px-4 py-3 text-sm text-stone-400 text-center">등록된 제품이 없습니다.</div>
              ) : (
                /* DB에서 가져온 데이터로 메뉴 생성 */
                dbProducts.map((product) => (
                  <Link 
                    key={product.id} 
                    href={`/products/${product.slug}`} 
                    className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium rounded-xl transition-colors"
                  >
                    {product.title}
                  </Link>
                ))
              )}

            </div>
          </div>

          {/* 4. 오시는 길 */}
          <div className="flex items-center">
            <Link href="/location" className="font-bold text-stone-700 hover:text-blue-700 transition-colors">오시는 길</Link>
          </div>
        </nav>

        {/* --- 모바일 햄버거 토글 버튼 --- */}
        <button 
          className="md:hidden p-2 text-stone-600 hover:text-blue-700 transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </button>

      </div>

      {/* --- 모바일 드롭다운 메뉴 --- */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-200 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
          
          {/* 모바일 1. 회사 소개 (아코디언) */}
          <div className="border-b border-stone-100 py-3">
            <button onClick={() => toggleAccordion('company')} className="w-full flex justify-between items-center text-lg font-bold text-stone-800">
              회사 소개
              <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'company' ? 'rotate-180 text-blue-700' : 'text-stone-400'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'company' ? 'max-h-48 mt-4' : 'max-h-0'}`}>
              <div className="flex flex-col pl-4 gap-3 border-l-2 border-blue-100 text-stone-600 font-medium pb-2">
                <Link href="/" className="hover:text-blue-700 block">회사소개</Link>
                <Link href="/profile" className="hover:text-blue-700 block">기업현황</Link>
                <Link href="/vision" className="hover:text-blue-700 block">비전</Link>
              </div>
            </div>
          </div>

          {/* 모바일 2. 솔루션 소개 (아코디언) */}
          <div className="border-b border-stone-100 py-3">
            <button onClick={() => toggleAccordion('solutions')} className="w-full flex justify-between items-center text-lg font-bold text-stone-800">
              솔루션 소개
              <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'solutions' ? 'rotate-180 text-blue-700' : 'text-stone-400'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'solutions' ? 'max-h-64 mt-4' : 'max-h-0'}`}>
              <div className="flex flex-col pl-4 gap-3 border-l-2 border-blue-100 text-stone-600 font-medium pb-2">
                <Link href="/solutions/automotive" className="hover:text-blue-700 block">자동차산업</Link>
                <Link href="/solutions/card" className="hover:text-blue-700 block">신용카드 및 ID카드</Link>
                <Link href="/solutions/pad-printing" className="hover:text-blue-700 block">인쇄산업</Link>
                <Link href="/solutions/polishing" className="hover:text-blue-700 block">PVD코팅</Link>
                <Link href="/solutions/high-security" className="hover:text-blue-700 block">High Security</Link>
              </div>
            </div>
          </div>

          {/* 🌟 모바일 3. 제품 소개 (DB 연동 동적 렌더링) */}
          <div className="border-b border-stone-100 py-3">
            <button onClick={() => toggleAccordion('products')} className="w-full flex justify-between items-center text-lg font-bold text-stone-800">
              제품 소개
              <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'products' ? 'rotate-180 text-blue-700' : 'text-stone-400'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'products' ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
              <div className="flex flex-col pl-4 gap-3 border-l-2 border-blue-100 text-stone-600 font-medium pb-2">
                
                {/* DB 데이터 매핑 */}
                {dbProducts.length === 0 ? (
                  <span className="text-sm text-stone-400 py-2">등록된 제품이 없습니다.</span>
                ) : (
                  dbProducts.map((product) => (
                    <Link 
                      key={product.id} 
                      href={`/products/${product.slug}`} 
                      className="hover:text-blue-700 block"
                    >
                      {product.title}
                    </Link>
                  ))
                )}

              </div>
            </div>
          </div>

          {/* 모바일 4. 오시는 길 (직접 링크) */}
          <div className="py-3">
            <Link href="/location" className="block text-lg font-bold text-stone-800 hover:text-blue-700 transition-colors">
              오시는 길
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}