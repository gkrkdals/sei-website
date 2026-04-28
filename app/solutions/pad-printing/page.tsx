import { PrinterIcon, ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export default function PadPrintingSolutionPage() {
  return (
    <div className="w-full bg-stone-50/30 dark:bg-slate-950 py-16 md:py-24 pt-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <PrinterIcon className="w-4 h-4" />
            <span>Solutions 3</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 dark:text-white tracking-tighter leading-tight">
            인쇄산업
          </h1>
        </header>

        {/* 1번 문단: 로고 -> 화살표 -> 설명 텍스트 */}
        <section className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mb-20">
          
          {/* 왼쪽: 제조사 로고 아웃라인 박스 */}
          {/* <div className="w-full lg:w-72 h-40 bg-white border-2 border-stone-300 border-dashed rounded-3xl flex flex-col items-center justify-center shrink-0 hover:border-blue-300 hover:shadow-md transition-all relative group overflow-hidden">
            <img src="/images/solutions/tekaprint.png" alt="제조사 로고" className="scale-200 w-24 h-24 object-contain opacity-50 group-hover:opacity-70 transition-opacity" />
          </div> */}

          {/* 중간: 화살표 */}
          {/* <div className="flex items-center justify-center shrink-0">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shadow-sm border border-blue-100">
              <ArrowRightIcon className="w-6 h-6 hidden lg:block" />
              <ArrowDownIcon className="w-6 h-6 block lg:hidden" />
            </div>
          </div> */}

          {/* 오른쪽: 텍스트 영역 */}
          <div className="flex-1 w-full bg-white dark:bg-slate-800 p-8 lg:p-12 rounded-3xl shadow-xl shadow-blue-950/5 dark:shadow-black/50 border border-stone-100 dark:border-slate-700">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                {/* <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-blue-700"></span> */}
                <p className="text-lg lg:text-xl text-stone-800 dark:text-stone-300 leading-relaxed font-medium break-keep">
                  정밀을 넘어, 표면에 가치를 인쇄합니다. 자동차 휠 및 내장재등을 위한 프리미엄 패드인쇄 솔루션
                </p>
              </li>
            </ul>
          </div>
          
        </section>

        {/* 2번 문단: 이미지 섹션 */}
        <section>
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-slate-700">
            <img 
              src="/images/solutions/padprinting.png" 
              alt="Pad Printing Solution" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

      </div>
    </div>
  );
}