"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  // 사용자가 메뉴를 클릭해 페이지가 이동하면 모바일 메뉴를 자동으로 닫습니다.
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenAccordion(null);
  }, [pathname]);

  const toggleAccordion = (menu: string) => {
    setOpenAccordion(openAccordion === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-stone-200/50 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-red-600 tracking-tighter group-hover:opacity-80 transition-opacity">
            SEI
          </span>
          <span className="text-sm font-semibold text-stone-400 border-l-2 border-stone-200 pl-2 leading-tight">
            Corporation
          </span>
        </Link>

        {/* --- 데스크톱 GNB (PC에서만 보임) --- */}
        <nav className="hidden md:flex space-x-10 h-full">
          {/* 1. 회사 소개 */}
          <div className="group relative h-full flex items-center">
            <span className="cursor-pointer font-bold text-stone-700 group-hover:text-red-700 transition-colors">회사 소개</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white/95 backdrop-blur-sm border border-stone-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-2 overflow-hidden z-50 p-2">
              <Link href="/" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">회사소개</Link>
              <Link href="/profile" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">기업현황</Link>
              <Link href="/vision" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">비전</Link>
            </div>
          </div>

          {/* 2. 솔루션 소개 */}
          <div className="group relative h-full flex items-center">
            <span className="cursor-pointer font-bold text-stone-700 group-hover:text-red-700 transition-colors">솔루션 소개</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white/95 backdrop-blur-sm border border-stone-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-2 overflow-hidden z-50 p-2">
              <Link href="/solutions/laser" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">레이저 장비</Link>
              <Link href="/solutions/inspection" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">검사 및 자동 포장라인</Link>
              <Link href="/solutions/pad-printing" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">패드인쇄기</Link>
              <Link href="/solutions/polishing" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">원심연마(광택)기</Link>
            </div>
          </div>

          {/* 3. 제품 소개 */}
          <div className="group relative h-full flex items-center">
            <span className="cursor-pointer font-bold text-stone-700 group-hover:text-red-700 transition-colors">제품 소개</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-sm border border-stone-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-2 overflow-hidden z-50 p-2">
              <Link href="/products/silkscreen" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">실크스크린 잉크</Link>
              <Link href="/products/automotive" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">차량용 실크/패드프린팅 잉크</Link>
              <Link href="/products/electronic" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">전자기판용 잉크</Link>
              <Link href="/products/baby" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">유아/소아용 무독성 잉크</Link>
              <Link href="/products/films" className="block px-4 py-3 hover:bg-red-50 hover:text-red-700 text-sm font-medium rounded-xl transition-colors">PVC/PET/PC/PP 필름</Link>
            </div>
          </div>

          {/* 4. 오시는 길 */}
          <div className="flex items-center">
            <Link href="/location" className="font-bold text-stone-700 hover:text-red-700 transition-colors">오시는 길</Link>
          </div>
        </nav>

        {/* --- 모바일 햄버거 토글 버튼 --- */}
        <button 
          className="md:hidden p-2 text-stone-600 hover:text-red-700 transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
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
              <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'company' ? 'rotate-180 text-red-700' : 'text-stone-400'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'company' ? 'max-h-48 mt-4' : 'max-h-0'}`}>
              <div className="flex flex-col pl-4 gap-3 border-l-2 border-red-100 text-stone-600 font-medium pb-2">
                <Link href="/" className="hover:text-red-700 block">회사소개</Link>
                <Link href="/profile" className="hover:text-red-700 block">기업현황</Link>
                <Link href="/vision" className="hover:text-red-700 block">비전</Link>
              </div>
            </div>
          </div>

          {/* 모바일 2. 솔루션 소개 (아코디언) */}
          <div className="border-b border-stone-100 py-3">
            <button onClick={() => toggleAccordion('solutions')} className="w-full flex justify-between items-center text-lg font-bold text-stone-800">
              솔루션 소개
              <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'solutions' ? 'rotate-180 text-red-700' : 'text-stone-400'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'solutions' ? 'max-h-64 mt-4' : 'max-h-0'}`}>
              <div className="flex flex-col pl-4 gap-3 border-l-2 border-red-100 text-stone-600 font-medium pb-2">
                <Link href="/solutions/laser" className="hover:text-red-700 block">레이저 장비</Link>
                <Link href="/solutions/inspection" className="hover:text-red-700 block">검사 및 자동 포장라인</Link>
                <Link href="/solutions/pad-printing" className="hover:text-red-700 block">패드인쇄기</Link>
                <Link href="/solutions/polishing" className="hover:text-red-700 block">원심연마(광택)기</Link>
              </div>
            </div>
          </div>

          {/* 모바일 3. 제품 소개 (아코디언) */}
          <div className="border-b border-stone-100 py-3">
            <button onClick={() => toggleAccordion('products')} className="w-full flex justify-between items-center text-lg font-bold text-stone-800">
              제품 소개
              <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'products' ? 'rotate-180 text-red-700' : 'text-stone-400'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'products' ? 'max-h-80 mt-4' : 'max-h-0'}`}>
              <div className="flex flex-col pl-4 gap-3 border-l-2 border-red-100 text-stone-600 font-medium pb-2">
                <Link href="/products/silkscreen" className="hover:text-red-700 block">실크스크린 잉크</Link>
                <Link href="/products/automotive" className="hover:text-red-700 block">차량용 실크/패드프린팅 잉크</Link>
                <Link href="/products/electronic" className="hover:text-red-700 block">전자기판용 잉크</Link>
                <Link href="/products/baby" className="hover:text-red-700 block">유아/소아용 무독성 잉크</Link>
                <Link href="/products/films" className="hover:text-red-700 block">PVC/PET/PC/PP 필름</Link>
              </div>
            </div>
          </div>

          {/* 모바일 4. 오시는 길 (직접 링크) */}
          <div className="py-3">
            <Link href="/location" className="block text-lg font-bold text-stone-800 hover:text-red-700 transition-colors">
              오시는 길
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}