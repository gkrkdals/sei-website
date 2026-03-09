import { PrinterIcon, ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export default function PadPrintingSolutionPage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <PrinterIcon className="w-4 h-4" />
            <span>Solutions 3</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight">
            패드인쇄기
          </h1>
        </header>

        {/* 1번 문단: 로고 -> 화살표 -> 설명 텍스트 */}
        <section className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mb-20">
          
          {/* 왼쪽: 제조사 로고 아웃라인 박스 */}
          <div className="w-full lg:w-72 h-40 bg-white border-2 border-stone-300 border-dashed rounded-3xl flex flex-col items-center justify-center shrink-0 hover:border-blue-300 hover:shadow-md transition-all relative group overflow-hidden">
            <img src="/images/solutions/tekaprint.png" alt="제조사 로고" className="scale-200 w-24 h-24 object-contain opacity-50 group-hover:opacity-70 transition-opacity" />
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
                  전세계적으로 유명한 스위스회사로써, <strong className="text-stone-950 font-bold border-b-2 border-blue-200">고정밀 인쇄 및 자동화 인쇄 설비</strong>를 제작하는 회사로써 유수의 시계제조업체 (롤렉스, 스와치그룹, 파텍필립, 오데마 피게 등)등에 공급 중.
                </p>
              </li>
            </ul>
          </div>
          
        </section>

        {/* 2번 문단: 5:3 비율 이미지 갤러리 */}
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-8 pl-2 border-l-4 border-blue-700">
            주요 장비 전경
          </h2>
          
          {/* 모바일에서는 세로 배치, PC에서는 8칸 그리드로 5:3 비율 형성 */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-6 md:h-[450px]">
            
            {/* 왼쪽 사진 (비율 5/8) */}
            <div className="col-span-1 md:col-span-5 bg-stone-200 rounded-3xl flex items-center justify-center border border-stone-300 border-dashed hover:opacity-95 transition-opacity relative overflow-hidden group min-h-[300px] md:min-h-0">
              <img src="/images/solutions/tekaprint2.png" alt="장비 1" className="w-full h-full object-cover absolute inset-0" />
              {/* <img src="/패드인쇄기1.jpg" alt="장비 1" className="w-full h-full object-cover absolute inset-0" /> */}
            </div>

            {/* 오른쪽 사진 (비율 3/8) */}
            <div className="col-span-1 md:col-span-3 bg-stone-200 rounded-3xl flex items-center justify-center border border-stone-300 border-dashed hover:opacity-95 transition-opacity relative overflow-hidden group min-h-[300px] md:min-h-0">
              <img src="/images/solutions/tekaprint3.png" alt="장비 2" className="w-full h-full object-cover absolute inset-0" />
              {/* <img src="/패드인쇄기2.jpg" alt="장비 2" className="w-full h-full object-cover absolute inset-0" /> */}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}