import { FaceSmileIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

export default function BabyInkPage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <FaceSmileIcon className="w-4 h-4" />
            <span>Products 4</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight break-keep">
            유아 및 소아용품용 <br className="hidden md:block"/> 무독성 실크스크린 및 패드용 잉크
          </h1>
        </header>

        {/* 1. 상단 핵심 특징 (안전성 강조 텍스트 박스) */}
        <section className="mb-16">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-950/5 border border-stone-200 w-full relative overflow-hidden">
            {/* 장식용 배경 로고/아이콘 효과 */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-5">
              <CheckBadgeIcon className="w-64 h-64 text-blue-900" />
            </div>

            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <CheckBadgeIcon className="w-7 h-7 text-blue-700 shrink-0 mt-0.5" />
                <p className="text-xl md:text-2xl text-stone-800 font-bold tracking-wide break-keep">
                  유아 젖병등의 유아용품 및 장난감에 사용되어지는 <strong className="text-blue-800">무독성 잉크</strong>
                </p>
              </li>
              <li className="flex items-start gap-4">
                <CheckBadgeIcon className="w-7 h-7 text-blue-700 shrink-0 mt-0.5" />
                <p className="text-xl md:text-2xl text-stone-800 font-bold tracking-wide break-keep">
                  Nuk 등의 세계 유수의 유아용품 기업에서 현재 사용 중
                </p>
              </li>
              <li className="flex items-start gap-4">
                <CheckBadgeIcon className="w-7 h-7 text-blue-700 shrink-0 mt-0.5" />
                <p className="text-xl md:text-2xl text-stone-800 font-bold tracking-wide break-keep">
                  <span className="border-b-4 border-blue-200 pb-1">구강접촉 시에도 전혀 문제가 없고 무해함</span>
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 하단 적용 사례 갤러리 (다양한 젖병 및 유아용품) */}
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-8 pl-2 border-l-4 border-blue-700">
            주요 적용 제품군
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            
            {/* 제품 이미지 1 */}
            <div className="w-full aspect-square bg-white rounded-3xl flex flex-col items-center justify-center border border-stone-200 shadow-sm overflow-hidden relative group p-6">
              <img src="/images/products/baby/bottle1.png" alt="Tommee Tippee" className="w-full h-full object-contain transition-transform duration-500" />
              {/* <img src="/images/baby-1.jpg" alt="Tommee Tippee" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" /> */}
            </div>

            {/* 제품 이미지 2 */}
            <div className="w-full aspect-square bg-white rounded-3xl flex flex-col items-center justify-center border border-stone-200 shadow-sm overflow-hidden relative group p-6">
              <img src="/images/products/baby/bottle2.png" alt="AVENT" className="w-full h-full object-contain transition-transform duration-500" />
              {/* <img src="/images/baby-2.jpg" alt="AVENT" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" /> */}
            </div>

            {/* 제품 이미지 3 */}
            <div className="w-full aspect-square bg-white rounded-3xl flex flex-col items-center justify-center border border-stone-200 shadow-sm overflow-hidden relative group p-6">
              <img src="/images/products/baby/bottle3.png" alt="Chicco / Haakaa" className="w-full h-full object-contain transition-transform duration-500" />
              {/* <img src="/images/baby-3.jpg" alt="Chicco" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" /> */}
            </div>

            {/* 제품 이미지 4 */}
            <div className="w-full aspect-square bg-white rounded-3xl flex flex-col items-center justify-center border border-stone-200 shadow-sm overflow-hidden relative group p-6">
              <img src="/images/products/baby/bottle4.png" alt="Potty Training" className="w-full h-full object-contain transition-transform duration-500" />
              {/* <img src="/images/baby-4.jpg" alt="Potty Training" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" /> */}
            </div>

            {/* 제품 이미지 5 */}
            <div className="w-full aspect-square bg-white rounded-3xl flex flex-col items-center justify-center border border-stone-200 shadow-sm overflow-hidden relative group p-6">
              <img src="/images/products/baby/bottle5.png" alt="Munchkin LATCH" className="w-full h-full object-contain transition-transform duration-500" />
              {/* <img src="/images/baby-5.jpg" alt="Munchkin LATCH" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" /> */}
            </div>

            {/* 제품 이미지 6 */}
            <div className="w-full aspect-square bg-white rounded-3xl flex flex-col items-center justify-center border border-stone-200 shadow-sm overflow-hidden relative group p-6">
              <img src="/images/products/baby/bottle6.png" alt="Collapsego" className="w-full h-full object-contain transition-transform duration-500" />
              {/* <img src="/images/baby-6.jpg" alt="Collapsego" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" /> */}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}