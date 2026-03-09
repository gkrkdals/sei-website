import { TruckIcon } from '@heroicons/react/24/outline';

export default function AutomotiveInkPage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <TruckIcon className="w-4 h-4" />
            <span>Products 2</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight">
            차량용 실크/패드프린팅 잉크
          </h1>
        </header>

        {/* 제품 적용 사례 리스트 */}
        <section className="flex flex-col gap-6">
          
          {/* 1. 엠블럼 */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-6 flex items-center justify-center text-center shrink-0">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                  <p className="text-stone-700 font-medium break-keep">
                    높은 내구성과 저항성을 가진 잉크 시스템으로 15년 이상 상기 업체들에서 사용 중. 이외에 포드, 피아트등 에서도 사용 중.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. 도어스커프 및 레버 */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 flex items-center justify-center text-center shrink-0">
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
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-yellow-600 to-amber-700 text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide">각종 버튼류</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
              {/* 이미지 3개 분할 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="w-full aspect-[4/3] bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 text-sm">
                    <img src="/images/products/automotive/btn1.png" alt="버튼류 이미지 1" className="max-w-full max-h-full object-cover"/>
                </div>
                <div className="w-full aspect-[4/3] bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 text-sm">
                    <img src="/images/products/automotive/btn2.png" alt="버튼류 이미지 2" className="max-w-full max-h-full object-cover"/>
                </div>
                <div className="w-full aspect-[4/3] bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 text-sm">
                    <img src="/images/products/automotive/btn3.png" alt="버튼류 이미지 3" className="max-w-full max-h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>

          {/* 4. 속도계 */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide">속도계</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col md:flex-row gap-8 items-center">
              {/* 이미지 영역 */}
              <div className="w-full md:w-1/2 aspect-[4/3] bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 shrink-0">
                <img src="/images/products/automotive/speedometer.png" alt="속도계 이미지" className="max-w-full max-h-full object-cover"/>
              </div>
              {/* 텍스트 영역 */}
              <div className="flex-1 w-full">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                    <p className="text-stone-700 font-medium break-keep">1액형과 2액형 타입의 아날로그 계기반 데코용 잉크 시스템</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                    <p className="text-stone-700 font-medium break-keep">폴리카보네이트 전용 불투과성 (high opaque) 흰색과 검은색, 투명 색상과 무광 바니쉬.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. 림(휠) 데코전용 패드프린팅 시스템 (사진 2장에서 취합) */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-yellow-500 to-amber-600 text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide leading-snug">림(휠) 데코전용 <br/> 패드프린팅 <br/> 시스템</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center gap-4">
              {/* 상단 3개 휠 이미지 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="w-full aspect-square bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 text-sm">
                    <img src="/images/products/automotive/wheel1.png" alt="휠 1 이미지" className="max-w-full max-h-full object-cover rounded-xl"/>
                </div>
                <div className="w-full aspect-square bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 text-sm">
                    <img src="/images/products/automotive/wheel2.png" alt="휠 2 이미지" className="max-w-full max-h-full object-cover rounded-xl"/>
                </div>
                <div className="w-full aspect-square bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 text-sm">
                    <img src="/images/products/automotive/wheel3.png" alt="휠 3 이미지" className="max-w-full max-h-full object-cover rounded-xl"/>
                </div>
              </div>
              {/* 하단 2개 디테일 이미지 (Audi, M Performance) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full aspect-[4/3] bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 text-sm">
                    <img src="/images/products/automotive/wheel4.png" alt="Audi Sport 디테일" className="max-w-full max-h-full object-cover"/>
                </div>
                <div className="w-full aspect-[4/3] bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 text-sm">
                    <img src="/images/products/automotive/wheel5.png" alt="M PERFORMANCE 디테일" className="max-w-full max-h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>

          {/* 6. 터치패널 및 디스플레이 */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            <div className="lg:w-64 bg-gradient-to-br from-amber-600 to-yellow-700 text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide leading-snug">터치패널 및 <br/> 디스플레이</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col lg:flex-row gap-8 items-center">
              {/* 이미지 영역 (2개) */}
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 shrink-0">
                <div className="w-full aspect-square bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 text-xs text-center p-2">
                    <img src="/images/products/automotive/panel.png" alt="디스플레이 1 이미지" className="max-w-full max-h-full object-cover"/>
                </div>
                <div className="w-full aspect-square bg-stone-200 rounded-xl flex items-center justify-center border border-stone-300 border-dashed text-stone-500 text-xs text-center p-2">
                    <img src="/images/products/automotive/display.png" alt="디스플레이 2 이미지" className="max-w-full max-h-full object-cover"/>
                </div>
              </div>
              {/* 텍스트 영역 (파란 테두리 박스 느낌을 살려 강조) */}
              <div className="flex-1 w-full bg-stone-50 p-6 rounded-xl border border-stone-200">
                <p className="text-stone-900 font-bold text-lg mb-3">유리 패널 전용의 특수한 블랙 잉크</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0"></span>
                    <p className="text-stone-700 font-medium break-keep">고 내열성 솔벤트 베이스의 블랙 잉크</p>
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