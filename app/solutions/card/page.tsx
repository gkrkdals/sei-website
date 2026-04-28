import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ScrollButton from './ScrollButton';

export default function CardFilmPage() {
  return (
    <div className="w-full bg-stone-50/30 dark:bg-slate-950 pt-20">
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[650px] overflow-hidden">
        {/* Background Image Placeholder with Premium Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d7c6af] via-[#ceb79c] to-[#b99f83] dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 z-0" />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10" />
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="inline-block px-4 py-1.5 bg-white shadow-lg border border-white/20 rounded-full text-[#173f97] text-xs md:text-sm font-bold mb-6 w-fit tracking-wider">
            CARD FILM SOLUTIONS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            카드 전용 필름 <br className='sm:hidden'/>솔루션
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            Card Film Solutions
          </p>
          <p className="max-w-2xl text-white/95 text-base md:text-lg leading-relaxed mb-10 break-keep drop-shadow-sm font-medium">
            SEI는 신용카드 및 ID카드 제조를 위한 프리미엄 카드 솔루션을 공급합니다.<br/>
            친환경 우드 카드부터 PVC, rPVC, PET, PETG, PC 기반의 고기능 필름 소재까지,
            White Core, Transparent Core, Overlay, 레이저 각인용 Overlay 등 국내 카드 제조사에 최적화된 종합 솔루션을 제공합니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-[#173f97] text-white font-bold rounded-xl shadow-xl hover:bg-[#1a4bb3] transition-colors text-lg">
              제품 문의
            </button>
            <ScrollButton 
              targetId="structure"
              label="구조 보기"
              className="px-8 py-3 bg-white/10 backdrop-blur-md border-2 border-white/90 text-white font-bold rounded-xl hover:bg-white/20 transition-colors text-lg"
            />
          </div>
        </div>

        {/* Hero Visual - Card Stack Illustration Effect */}
        <div className="hidden lg:block absolute right-[10%] bottom-[10%] w-[450px] h-[300px] z-20">
          <div className="absolute right-0 bottom-0 w-[300px] h-[188px] bg-gradient-to-br from-[#f7f4ee] to-[#d7c3a6] rounded-2xl shadow-2xl border border-white/20 rotate-[-8deg] flex flex-col p-6">
            <span className="text-stone-400 font-bold text-sm">White Core Film</span>
            <div className="mt-auto text-[10px] text-stone-400 tracking-[0.2em]">PVC · rPVC · PET · PETG · PC</div>
          </div>
          <div className="absolute right-12 bottom-12 w-[300px] h-[188px] bg-gradient-to-br from-[#d4d7df] via-[#9fb2d6] to-[#edf3ff] rounded-2xl shadow-2xl border border-white/20 rotate-[8deg] flex flex-col p-6">
            <span className="text-blue-900/60 font-bold text-sm">Overlay Film</span>
            <div className="w-10 h-7 bg-gradient-to-br from-[#e8e2d1] to-[#c9b58a] rounded-md border border-black/5 mt-4" />
            <div className="mt-auto text-[10px] text-blue-900/40 tracking-[0.2em]">25 MICRON ULTRA THIN</div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 relative z-30 pb-24 md:-mt-16">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-stone-200/60 dark:shadow-black/50 p-6 md:p-16 border border-stone-100 dark:border-slate-700 mt-4 md:mt-0">
          {/* Wood Card Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-stone-900 dark:text-white mb-2">Wood Card</h2>
              <p className="text-stone-500 dark:text-stone-400 text-lg font-medium">친환경 소재와 프리미엄 감성, 완전한 카드 기능을 갖춘 우드 카드 솔루션</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "친환경 소재 중심",
                  desc: "4개의 목재층과 1개의 종이층, 바이오 접착 기반 구조로 카드 본체의 95% 이상이 생분해성 소재로 구성됩니다."
                },
                {
                  title: "프리미엄 디자인 감성",
                  desc: "목재 특유의 결감과 질감으로 각 카드가 서로 다른 고유한 외관을 가지며 브랜드 차별화에 적합합니다."
                },
                {
                  title: "실사용 가능한 카드 구조",
                  desc: "EMV 모듈, 안테나, 마그네틱 스트라이프 등 결제 및 보안 요소들을 포함한 완전한 카드 기능을 지원합니다."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-stone-50/80 dark:bg-slate-700/50 rounded-3xl p-8 border border-stone-100 dark:border-slate-600 transition-all hover:scale-[1.02] hover:shadow-xl hover:bg-white dark:hover:bg-slate-700">
                  <h3 className="text-amber-700 dark:text-amber-400 font-bold text-lg mb-4">{item.title}</h3>
                  <p className="text-stone-600 dark:text-stone-400 text-base leading-relaxed break-keep">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Wood Card Image Section */}
            <div className="mt-16 rounded-[2rem] border-2 border-stone-200 dark:border-slate-600 overflow-hidden shadow-lg dark:shadow-black/30 bg-gradient-to-b from-stone-50 to-stone-100 dark:from-slate-700 dark:to-slate-800">
              <img 
                src="/images/solutions/woodcard.webp" 
                alt="Wood Card Solutions" 
                className="w-full h-auto object-contain aspect-video"
              />
            </div>
          </section>

          {/* Card Film Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-stone-900 dark:text-white mb-2">Card Film</h2>
              <p className="text-stone-500 dark:text-stone-400 text-lg font-medium">카드 성능, 가공성, 품질 안정성을 고려한 카드 전용 필름 공급 솔루션</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "다양한 소재 포트폴리오",
                  desc: "PVC, rPVC, PET, PETG, PC 등 다양한 카드용 필름을 공급하여 제품 사양, 내구성, 친환경성, 가공 방식에 따라 적합한 소재 선택을 지원합니다."
                },
                {
                  title: "카드 제조 공정 대응",
                  desc: "White core film, 투명 core film, overlay film 등 카드 적층 및 인쇄 공정에 적합한 필름 구성을 폭넓게 제공합니다."
                },
                {
                  title: "고기능 특수 필름 공급",
                  desc: "레이저 각인용 overlay film과 전 세계 최고 수준의 25μm ultra-thin overlay film까지 대응 가능한 고기능 솔루션입니다."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-stone-50/80 dark:bg-slate-700/50 rounded-3xl p-8 border border-stone-100 dark:border-slate-600 transition-all hover:scale-[1.02] hover:shadow-xl hover:bg-white dark:hover:bg-slate-700">
                  <h3 className="text-[#173f97] dark:text-blue-300 font-bold text-lg mb-4">{item.title}</h3>
                  <p className="text-stone-600 dark:text-stone-400 text-base leading-relaxed break-keep">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Product Structure Section */}
          <section className="mb-24" id="structure">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-stone-900 dark:text-white mb-1">제품 구조</h2>
              <p className="text-stone-500 dark:text-stone-400 text-lg font-medium">Card film structure overview</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              {/* Visual Diagram Placeholder */}
              <div className="w-full lg:w-3/5 bg-gradient-to-b from-[#f7f3ec] dark:from-slate-700 to-[#efe7da] dark:to-slate-800 rounded-[2rem] border border-stone-200/50 dark:border-slate-600/50 p-12 flex flex-col justify-center relative overflow-hidden min-h-[400px]">
                <div className="space-y-4 relative z-10">
                  <div className="w-3/4 h-12 bg-white dark:bg-slate-600 rounded-lg shadow-md transform skew-x-[-20deg] border border-stone-100 dark:border-slate-500 flex items-center px-8 font-bold text-stone-400 dark:text-slate-300">Overlay Film</div>
                  <div className="w-3/4 h-12 bg-[#dfe4ee] dark:bg-slate-500 rounded-lg shadow-md transform skew-x-[-20deg] border border-stone-100 dark:border-slate-400 flex items-center px-8 font-bold text-stone-500 dark:text-slate-200 ml-4">Laser Engraving Overlay</div>
                  <div className="w-3/4 h-12 bg-white dark:bg-slate-600 rounded-lg shadow-md transform skew-x-[-20deg] border border-stone-100 dark:border-slate-500 flex items-center px-8 font-bold text-stone-400 dark:text-slate-300 ml-8">Transparent Core Film</div>
                  <div className="w-3/4 h-12 bg-[#e2d1b7] dark:bg-slate-500 rounded-lg shadow-md transform skew-x-[-20deg] border border-stone-100 dark:border-slate-400 flex items-center px-8 font-bold text-stone-600 dark:text-slate-200 ml-12">White Core Film</div>
                </div>
              </div>
              
              <div className="w-full lg:w-2/5 flex flex-col gap-4">
                <div className="bg-[#f1ede6] dark:bg-slate-700 p-8 rounded-2xl border border-stone-200/30 dark:border-slate-600/30 flex-1">
                  <h4 className="text-[#4b6a46] dark:text-emerald-300 font-bold text-lg mb-3">공급 소재</h4>
                  <p className="text-stone-600 text-[0.95rem] leading-relaxed">
                    PVC, rPVC, PET, PETG, PC 기반의 카드 전용 필름으로 카드 구조와 용도에 맞는 소재 구성이 가능합니다.
                  </p>
                </div>
                <div className="bg-[#f1ede6] dark:bg-slate-700 p-8 rounded-2xl border border-stone-200/30 dark:border-slate-600/30 flex-1">
                  <h4 className="text-[#4b6a46] dark:text-emerald-300 font-bold text-lg mb-3">공급 품목</h4>
                  <p className="text-stone-600 dark:text-stone-300 text-[0.95rem] leading-relaxed">
                    White core film, Transparent core film, Overlay film, Laser engraving overlay film, 25 micron ultra-thin overlay film
                  </p>
                </div>
                <div className="bg-[#f1ede6] dark:bg-slate-700 p-8 rounded-2xl border border-stone-200/30 dark:border-slate-600/30 flex-1">
                  <h4 className="text-[#4b6a46] dark:text-emerald-300 font-bold text-lg mb-3">적용 분야</h4>
                  <p className="text-stone-600 dark:text-stone-300 text-[0.95rem] leading-relaxed">
                    금융카드, ID카드, 멤버십카드, 친환경 카드, 레이저 각인 카드 등 다양한 카드 제품에 적용 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Branding Section */}
          <section className="mt-12 pt-12 border-t border-stone-100 dark:border-slate-700">
            <div className="flex flex-col lg:flex-row gap-12 items-start justify-between mb-16">
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-[#173f97] dark:text-blue-300 mb-6">SEI Card Film Solutions</h3>
                <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed mb-8 break-keep font-medium">
                  SEI는 국내 카드 제조사에 카드 구조별 맞춤형 필름 소재를 공급하며,
                  카드 성능, 가공성, 친환경성, 디자인 차별화까지 고려한 실질적인 카드 소재 솔루션을 제공합니다.
                </p>
                <span className="inline-block bg-[#cfd9f3] text-[#173f97] font-bold rounded-xl px-6 py-3 text-sm">
                  국내 카드 제조사 공급 경험 기반 솔루션
                </span>
              </div>

              <div className="w-full lg:w-1/3 bg-[#eee8df] dark:bg-slate-700 p-8 rounded-3xl border border-stone-200/50 dark:border-slate-600/50">
                <div className="flex gap-2 mb-6">
                  <span className="bg-[#173f97] dark:bg-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-bold">White Core</span>
                  <span className="bg-[#d6c29a] dark:bg-amber-700 text-stone-800 dark:text-amber-100 px-4 py-1.5 rounded-full text-xs font-bold">Overlay</span>
                </div>
                <h4 className="text-[#173f97] dark:text-blue-300 font-bold text-xl mb-3">공급 기반 적용</h4>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed break-keep">
                  국제 결제 카드 제조 기준에 부합하는 고품질 필름을 국내 메이저 카드 제조사에 안정적으로 공급하고 있습니다.
                </p>
              </div>
            </div>
            
            {/* CTA Banner */}
            <div className="bg-[#173f97] dark:bg-blue-900 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white gap-6">
              <div className="text-2xl md:text-3xl font-bold tracking-tight">
                카드 전용 필름 도입 문의
              </div>
              <div className="text-xl md:text-2xl font-light opacity-80 italic">
                SEI Co., Ltd.
              </div>
            </div>
          </section>
          
        </div>
      </div>

    </div>
  );
}

