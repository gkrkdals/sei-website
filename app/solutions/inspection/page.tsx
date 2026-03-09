import { MagnifyingGlassIcon, ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export default function InspectionSolutionPage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <MagnifyingGlassIcon className="w-4 h-4" />
            <span>Solutions 2</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight">
            검사 및 자동 포장라인
          </h1>
        </header>

        {/* 1번 문단: 로고 -> 화살표 -> 설명 텍스트 (2-1과 동일한 레이아웃) */}
        <section className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mb-20">
          
          {/* 왼쪽: 제조사 로고 아웃라인 박스 */}
          <div className="w-full lg:w-72 h-40 bg-white border-2 border-stone-300 border-dashed rounded-3xl flex flex-col items-center justify-center shrink-0 hover:border-blue-300 hover:shadow-md transition-all relative group overflow-hidden">
            <img src="/images/solutions/economa.png" alt="제조사 로고" className="w-24 h-24 object-contain opacity-50 group-hover:opacity-70 transition-opacity" />
          </div>

          {/* 중간: 화살표 */}
          <div className="flex items-center justify-center shrink-0">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shadow-sm border border-blue-100">
              <ArrowRightIcon className="w-6 h-6 hidden lg:block" />
              <ArrowDownIcon className="w-6 h-6 block lg:hidden" />
            </div>
          </div>

          {/* 오른쪽: 텍스트 영역 */}
          <div className="flex-1 w-full bg-white p-8 lg:p-12 rounded-3xl shadow-xl shadow-blue-950/5 border border-stone-100">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-blue-700"></span>
                <p className="text-lg lg:text-xl text-stone-800 leading-relaxed font-medium break-keep">
                  전세계적으로 유명한 독일회사로써, 생산 라인 상 무게 고속카메라등을 이용한 <strong className="text-stone-950 font-bold border-b-2 border-blue-200">검사(검수) 및 패키징</strong>까지 가능한 솔루션 및 장비 공급 중.
                </p>
              </li>
            </ul>
          </div>
          
        </section>

        {/* 2번 문단: 벽돌쌓기(모자이크) 형태의 꽉 찬 이미지 갤러리 */}
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-8 pl-2 border-l-4 border-blue-700">
            주요 장비 이미지
          </h2>
          
          {/* Grid를 활용한 타이트한 모자이크 레이아웃 (gap-3으로 촘촘하게 배치) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[150px] md:auto-rows-[200px]">
            
            {/* 큰 이미지 (가로 2칸, 세로 2칸 차지) */}
            <div className="col-span-2 row-span-2 bg-stone-200 rounded-2xl flex items-center justify-center border border-stone-300 border-dashed hover:opacity-90 transition-opacity relative group overflow-hidden">
              <img src="/images/solutions/economa2.png" alt="" className="w-full h-full object-cover absolute inset-0" />
              {/* <img src="/장비1.jpg" alt="" className="w-full h-full object-cover absolute inset-0" /> */}
            </div>

            <div className="col-span-2 row-span-2 bg-stone-200 rounded-2xl flex items-center justify-center border border-stone-300 border-dashed hover:opacity-90 transition-opacity relative group overflow-hidden">
              <img src="/images/solutions/economa3.png" alt="" className="w-full h-full object-cover absolute inset-0" />
              {/* <img src="/장비1.jpg" alt="" className="w-full h-full object-cover absolute inset-0" /> */}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}