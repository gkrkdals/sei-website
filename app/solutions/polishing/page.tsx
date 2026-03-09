import { Cog8ToothIcon, ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export default function PolishingSolutionPage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <Cog8ToothIcon className="w-4 h-4" />
            <span>Solutions 4</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight">
            원심연마기
          </h1>
        </header>

        {/* 1번 문단: 로고 -> 화살표 -> 설명 텍스트 */}
        <section className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mb-20">
          
          {/* 왼쪽: 제조사 로고 아웃라인 박스 */}
          <div className="w-full lg:w-72 h-40 bg-white border-2 border-stone-300 border-dashed rounded-3xl flex flex-col items-center justify-center shrink-0 hover:border-red-300 hover:shadow-md transition-all relative group overflow-hidden">
            <img src="/images/solutions/spaleck.png" alt="제조사 로고" className="scale-200 w-24 h-24 object-contain transition-transform duration-500" />
          </div>

          {/* 중간: 화살표 */}
          <div className="flex items-center justify-center shrink-0">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-700 shadow-sm border border-red-100">
              <ArrowRightIcon className="w-6 h-6 hidden lg:block" />
              <ArrowDownIcon className="w-6 h-6 block lg:hidden" />
            </div>
          </div>

          {/* 오른쪽: 텍스트 영역 */}
          <div className="flex-1 w-full bg-white p-8 lg:p-12 rounded-3xl shadow-xl shadow-red-950/5 border border-stone-100">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-red-700"></span>
                <p className="text-lg lg:text-xl text-stone-800 leading-relaxed font-medium break-keep">
                  <strong className="text-stone-950 font-bold border-b-2 border-red-200">원심력을 이용한 연마(광택)기 제품의 시초</strong>로써, 다양한 제품 (금,은 주화, 골프공, 각종 부품등)의 연마기 공급 중.
                </p>
              </li>
            </ul>
          </div>
          
        </section>

        {/* 2번 문단: 장비 이미지 3개 (마우스 호버 시 줌인 효과 적용) */}
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-8 pl-2 border-l-4 border-red-700">
            주요 장비 이미지
          </h2>
          
          {/* 3칸 그리드 배열 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 장비 이미지 1 (확대 효과를 위해 overflow-hidden 적용) */}
            <div className="w-full aspect-[4/3] bg-stone-200 rounded-3xl flex flex-col items-center justify-center border border-stone-200 text-stone-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <img src="/images/solutions/spaleck2.png" alt="장비 1" className="w-full h-full object-cover transition-transform duration-500" />
              {/* <img src="/연마기1.jpg" alt="장비 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" /> */}
            </div>

            {/* 장비 이미지 2 */}
            <div className="w-full aspect-[4/3] bg-stone-200 rounded-3xl flex flex-col items-center justify-center border border-stone-200 text-stone-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <img src="/images/solutions/spaleck3.png" alt="장비 2" className="w-full h-full object-cover transition-transform duration-500" />
              {/* <img src="/연마기2.jpg" alt="장비 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" /> */}
            </div>

            {/* 장비 이미지 3 */}
            <div className="w-full aspect-[4/3] bg-stone-200 rounded-3xl flex flex-col items-center justify-center border border-stone-200 text-stone-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <img src="/images/solutions/spaleck4.png" alt="장비 3" className="w-full h-full object-cover transition-transform duration-500" />
              {/* <img src="/연마기3.jpg" alt="장비 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" /> */}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}