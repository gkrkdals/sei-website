import { TruckIcon } from '@heroicons/react/24/outline';

export default function AutomotiveInkPage() {
  return (
    <div className="w-full bg-stone-50/30 dark:bg-slate-950 py-16 md:py-24 pt-20 md:pt-0">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <TruckIcon className="w-4 h-4" />
            <span>Products 2</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 dark:text-white tracking-tighter leading-tight">
            자동차산업
          </h1>
        </header>

        {/* 카피 섹션 */}
        <section className="mb-16 md:mb-24">
          <div className="relative p-8 md:p-12 bg-white dark:bg-slate-800 rounded-[2rem] border border-stone-100 dark:border-slate-700 shadow-2xl shadow-blue-900/5 dark:shadow-black/50 overflow-hidden">
            {/* 배경 장식 요소 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 dark:bg-blue-950/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-0"></div>
            
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-2xl md:text-4xl font-black text-stone-900 dark:text-white mb-6 tracking-tight break-keep leading-tight">
                자동차 휠을 위한 <br className="block md:hidden" />
                <span className="text-blue-700">정밀 패드인쇄 솔루션</span>
              </h2>
              <div className="w-12 h-1.5 bg-blue-700 rounded-full mb-8"></div>
              <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 leading-relaxed font-medium break-keep">
                <span className="text-stone-900 font-bold dark:text-stone-300">Audi, BMW, Stellantis Group, Toyota</span> 등 글로벌 자동차 브랜드의 휠 및 부품 마킹 분야에서 적용되는 
                <span className="text-blue-800 font-semibold px-1">TECA-PRINT 솔루션</span>은 복합 곡면과 고급 표면 마감에도 
                선명하고 안정적인 패드인쇄 품질을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 제품 적용 사례 리스트 */}
        <section className="flex flex-col gap-6">

          {/* 5. 림(휠) 데코전용 패드프린팅 시스템 (사진 2장에서 취합) */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm dark:shadow-black/30 border border-stone-100 dark:border-slate-700 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-[#538EBD] to-[#3B6D96] text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide leading-snug">림(휠) 데코전용 <br/> 패드프린팅 <br/> 시스템</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center gap-4">
              {/* 이미지 영역: wheel1-1.png 단일 이미지로 대체 */}
              <div className="w-full rounded-xl overflow-hidden shadow-sm border border-stone-100 dark:border-slate-600">
                <img 
                  src="/images/products/automotive/wheel1-1.png" 
                  alt="림(휠) 데코전용 패드프린팅 시스템" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
          {/* 잉크 솔루션 섹션 타이틀 카드 (엠블럼 카드 디자인과 통일) */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm dark:shadow-black/30 border border-stone-100 dark:border-slate-700 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-[#538EBD] to-[#3B6D96] text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide leading-snug">자동차 관련 패드 및 <br/> 실크스크린용 <br/> 잉크 솔루션</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex items-center bg-blue-50/30 dark:bg-slate-700/30">
              <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 leading-relaxed font-medium break-keep">
                유럽 및 북미 유수의 부품 마킹 분야에서 <span className="text-blue-800 font-bold">뛰어난 잉크 품질 신뢰성</span>을 검증받은 제품을 용도에 맞게 제공해드립니다.
              </p>
            </div>
          </div>

          {/* 1. 엠블럼 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm dark:shadow-black/30 border border-stone-100 dark:border-slate-700 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-[#538EBD] to-[#3B6D96] text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide">엠블럼</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col gap-6 justify-center">
              {/* 이미지 영역: 4개 로고 */}
              <div className="flex flex-wrap gap-4">
                <img src="/images/products/automotive/volkswagen.png" alt="Volkswagen 로고" className="w-20 h-20 object-contain"/>
                <img src="/images/products/automotive/bmw.png" alt="BMW 로고" className="w-20 h-20 object-contain"/>
                <img src="/images/products/automotive/alfaromeo.png" alt="Alfa 로고" className="w-20 h-20 object-contain"/>
                <img src="/images/products/automotive/porsche.png" alt="Porsche 로고" className="w-20 h-20 object-contain"/>
              </div>
              {/* 텍스트 영역 */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2.5 shrink-0"></span>
                  <p className="text-stone-700 dark:text-stone-400 font-medium break-keep">
                    높은 내구성과 저항성을 가진 잉크 시스템으로 15년 이상 상기 업체들에서 사용 중. 이외에 포드, 피아트등 에서도 사용 중.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. 도어스커프 및 레버 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm dark:shadow-black/30 border border-stone-100 dark:border-slate-700 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-[#538EBD] to-[#3B6D96] text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide leading-snug">도어스커프 <br/> 및 레버</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
              {/* 이미지 2개 분할 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full aspect-[16/9] rounded-xl flex items-center justify-center">
                    <img src="/images/products/automotive/doorscoff.png" alt="도어스커프 이미지" className="max-w-full max-h-full object-cover"/>
                </div>
                <div className="w-full aspect-[16/9] rounded-xl flex items-center justify-center">
                    <img src="/images/products/automotive/lever.png" alt="레버 이미지" className="max-w-full max-h-full object-cover"/>
                
                </div>
              </div>
            </div>
          </div>

          {/* 3. 각종 버튼류 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm dark:shadow-black/30 border border-stone-100 dark:border-slate-700 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-[#538EBD] to-[#3B6D96] text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide">각종 버튼류</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
              {/* 이미지 3개 분할 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="w-full aspect-[4/3] bg-stone-200 dark:bg-slate-700 rounded-xl flex items-center justify-center border border-stone-300 dark:border-slate-600 border-dashed text-stone-500 dark:text-slate-400 text-sm">
                    <img src="/images/products/automotive/btn1.png" alt="버튼류 이미지 1" className="max-w-full max-h-full object-cover"/>
                </div>
                <div className="w-full aspect-[4/3] bg-stone-200 dark:bg-slate-700 rounded-xl flex items-center justify-center border border-stone-300 dark:border-slate-600 border-dashed text-stone-500 dark:text-slate-400 text-sm">
                    <img src="/images/products/automotive/btn2.png" alt="버튼류 이미지 2" className="max-w-full max-h-full object-cover"/>
                </div>
                <div className="w-full aspect-[4/3] bg-stone-200 dark:bg-slate-700 rounded-xl flex items-center justify-center border border-stone-300 dark:border-slate-600 border-dashed text-stone-500 dark:text-slate-400 text-sm">
                    <img src="/images/products/automotive/btn3.png" alt="버튼류 이미지 3" className="max-w-full max-h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>

          {/* 4. 속도계 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm dark:shadow-black/30 border border-stone-100 dark:border-slate-700 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-[#538EBD] to-[#3B6D96] text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide">속도계</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col md:flex-row gap-8 items-center">
              {/* 이미지 영역 */}
              <div className="w-full md:w-1/2 aspect-[4/3] bg-stone-200 dark:bg-slate-700 rounded-xl flex items-center justify-center border border-stone-300 dark:border-slate-600 border-dashed text-stone-500 dark:text-slate-400 shrink-0">
                <img src="/images/products/automotive/speedometer.png" alt="속도계 이미지" className="max-w-full max-h-full object-cover"/>
              </div>
              {/* 텍스트 영역 */}
              <div className="flex-1 w-full">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2.5 shrink-0"></span>
                    <p className="text-stone-700 dark:text-stone-400 font-medium break-keep">1액형과 2액형 타입의 아날로그 계기반 데코용 잉크 시스템</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                    <p className="text-stone-700 font-medium break-keep">폴리카보네이트 전용 불투과성 (high opaque) 흰색과 검은색, 투명 색상과 무광 바니쉬.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          

          {/* 6. 터치패널 및 디스플레이 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm dark:shadow-black/30 border border-stone-100 dark:border-slate-700 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-[#538EBD] to-[#3B6D96] text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide leading-snug">터치패널 및 <br/> 디스플레이</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col lg:flex-row gap-8 items-center">
              {/* 이미지 영역 (2개) */}
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 shrink-0">
                <div className="w-full aspect-square bg-stone-200 dark:bg-slate-700 rounded-xl flex items-center justify-center border border-stone-300 dark:border-slate-600 border-dashed text-stone-500 dark:text-slate-400 text-xs text-center p-2">
                    <img src="/images/products/automotive/panel.png" alt="디스플레이 1 이미지" className="max-w-full max-h-full object-cover"/>
                </div>
                <div className="w-full aspect-square bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 text-xs text-center p-2">
                    <img src="/images/products/automotive/display.png" alt="디스플레이 2 이미지" className="max-w-full max-h-full object-cover"/>
                </div>
              </div>
              {/* 텍스트 영역 (파란 테두리 박스 느낌을 살려 강조) */}
              <div className="flex-1 w-full bg-stone-50 dark:bg-slate-700 p-6 rounded-xl border border-stone-200 dark:border-slate-600">
                <p className="text-stone-900 dark:text-white font-bold text-lg mb-3">유리 패널 전용의 특수한 블랙 잉크</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-700 dark:bg-blue-400 mt-2 shrink-0"></span>
                    <p className="text-stone-700 dark:text-stone-300 font-medium break-keep">고 내열성 솔벤트 베이스의 블랙 잉크</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}