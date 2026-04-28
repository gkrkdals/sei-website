import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ScrollButton from '../card/ScrollButton';

export default function PolishingSolutionPage() {
  return (
    <div className="w-full bg-stone-50/30 dark:bg-slate-950 pt-20">
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[650px] overflow-hidden">
        {/* Background Image Placeholder with Premium Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a4a5c] via-[#4a5a6c] to-[#6a7a8c] dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 z-0" />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10" />
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="inline-block px-4 py-1.5 bg-white shadow-lg border border-white/20 rounded-full text-[#173f97] text-xs md:text-sm font-bold mb-6 w-fit tracking-wider">
            PVD COATING SOLUTIONS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Inorcoat PVD <br className='sm:hidden'/>코팅 솔루션
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            High Performance Coating Systems by Inorcoat
          </p>
          <p className="max-w-2xl text-white/95 text-base md:text-lg leading-relaxed mb-10 break-keep drop-shadow-sm font-medium">
            SEI는 독일 Inorcoat사의 국내 대리점으로서 금형, 정밀부품 및 산업용 고기능 표면처리를 위한<br/>
            PVD 코팅 솔루션을 소개합니다. 높은 내마모성, 표면 품질, 공정 안정성을 바탕으로<br/>
            프리미엄 코팅 장비와 공정 기술을 제공합니다.
          </p>
          {/* <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-[#173f97] text-white font-bold rounded-xl shadow-xl hover:bg-[#1a4bb3] transition-colors text-lg">
              제품 문의
            </button>
            <ScrollButton 
              targetId="system"
              label="시스템 보기"
              className="px-8 py-3 bg-white/10 backdrop-blur-md border-2 border-white/90 text-white font-bold rounded-xl hover:bg-white/20 transition-colors text-lg"
            />
          </div> */}
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 relative z-30 pb-24 md:-mt-16">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-stone-200/60 dark:shadow-black/50 p-6 md:p-16 border border-stone-100 dark:border-slate-700 mt-4 md:mt-0">
          
          {/* Why Inorcoat Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-stone-900 dark:text-white mb-2">Why Inorcoat</h2>
              <p className="text-stone-500 dark:text-stone-400 text-lg font-medium">고성능 표면처리와 산업용 생산성을 함께 고려한 PVD 코팅 솔루션</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "높은 내마모성",
                  desc: "프리미엄 PVD 코팅 기술로 금형, 정밀부품의 내마모성을 극대화하며, 제품의 수명을 연장시킵니다."
                },
                {
                  title: "표면 품질 최적화",
                  desc: "정밀한 공정 제어로 균일하고 우수한 표면 품질을 제공하여 제품의 미적 가치와 기능성을 동시에 충족합니다."
                },
                {
                  title: "공정 안정성",
                  desc: "안정적인 코팅 시스템으로 일관된 품질을 보장하며, 효율적인 산업용 생산 프로세스를 지원합니다."
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

          {/* Inorcoat Solutions Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-stone-900 dark:text-white mb-2">Inorcoat 코팅 솔루션</h2>
              <p className="text-stone-500 dark:text-stone-400 text-lg font-medium">산업용 고기능 표면처리를 위한 프리미엄 코팅 시스템</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "정밀 금형 코팅",
                  desc: "고정밀 사출금형, 프레스금형 등 다양한 금형에 대응하는 맞춤형 PVD 코팅으로 금형의 수명을 연장합니다."
                },
                {
                  title: "정밀부품 표면처리",
                  desc: "자동차, 의료, 항공우주 등 다양한 정밀 부품의 표면 특성을 향상시키는 고성능 코팅 솔루션입니다."
                },
                {
                  title: "산업용 특수 코팅",
                  desc: "특정 산업분야의 고기능 요구사항을 충족하는 맞춤형 코팅 기술로 부가가치를 극대화합니다."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-stone-50/80 dark:bg-slate-700/50 rounded-3xl p-8 border border-stone-100 dark:border-slate-600 transition-all hover:scale-[1.02] hover:shadow-xl hover:bg-white dark:hover:bg-slate-700">
                  <h3 className="text-[#50654d] dark:text-emerald-300 font-bold text-lg mb-4">{item.title}</h3>
                  <p className="text-stone-600 dark:text-stone-400 text-base leading-relaxed break-keep">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* System Overview Section */}
          <section className="mb-24" id="system">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-stone-900 dark:text-white mb-1">시스템 개요</h2>
              <p className="text-stone-500 dark:text-stone-400 text-lg font-medium">Inorcoat PVD coating system overview</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              {/* System Image */}
              <div className="w-full lg:w-2/3 rounded-[2rem] border-2 border-stone-200 dark:border-slate-600 overflow-hidden shadow-lg dark:shadow-black/30 bg-gradient-to-b from-stone-50 to-stone-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center min-h-[450px]">
                <img 
                  src="/images/solutions/inorcoat.png" 
                  alt="Inorcoat PVD Coating System" 
                  className="w-80 h-full object-contain"
                />
              </div>
              
              <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <div className="bg-[#f1ede6] dark:bg-slate-700 p-8 rounded-2xl border border-stone-200/30 dark:border-slate-600/30 flex-1">
                  <h4 className="text-[#173f97] dark:text-blue-300 font-bold text-lg mb-3">코팅 기술</h4>
                  <p className="text-stone-600 dark:text-stone-300 text-[0.95rem] leading-relaxed">
                    최신 PVD 코팅 기술을 접목하여 금형과 정밀부품의 표면 특성을 최적화합니다.
                  </p>
                </div>
                <div className="bg-[#f1ede6] dark:bg-slate-700 p-8 rounded-2xl border border-stone-200/30 dark:border-slate-600/30 flex-1">
                  <h4 className="text-[#173f97] dark:text-blue-300 font-bold text-lg mb-3">공급 솔루션</h4>
                  <p className="text-stone-600 dark:text-stone-300 text-[0.95rem] leading-relaxed">
                    정밀성 제어 및 안정적인 공정으로 고기능의 표면처리 솔루션을 제공합니다.
                  </p>
                </div>
                <div className="bg-[#f1ede6] dark:bg-slate-700 p-8 rounded-2xl border border-stone-200/30 dark:border-slate-600/30 flex-1">
                  <h4 className="text-[#173f97] dark:text-blue-300 font-bold text-lg mb-3">적용 분야</h4>
                  <p className="text-stone-600 dark:text-stone-300 text-[0.95rem] leading-relaxed">
                    금형, 정밀부품, 자동차, 의료, 항공우주 등 다양한 산업분야에 대응합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Branding Section */}
          <section className="mt-12 pt-12 border-t border-stone-100 dark:border-slate-700">
            <div className="flex flex-col lg:flex-row gap-12 items-start justify-between mb-16">
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-[#173f97] dark:text-blue-300 mb-6">SEI Inorcoat PVD Solutions</h3>
                <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed mb-8 break-keep font-medium">
                  SEI는 독일 Inorcoat사의 국내 대리점으로서 금형, 정밀부품 등 다양한 산업분야의 고기능 표면처리를 위한
                  프리미엄 PVD 코팅 솔루션을 제공합니다. 높은 내마모성, 표면 품질, 공정 안정성을 바탕으로
                  고객의 생산성 향상과 제품 경쟁력을 강화합니다.
                </p>
                <span className="inline-block bg-[#cfd9f3] text-[#173f97] font-bold rounded-xl px-6 py-3 text-sm">
                  프리미엄 PVD 코팅 솔루션 공급 기반
                </span>
              </div>

              <div className="w-full lg:w-1/3 bg-[#eee8df] dark:bg-slate-700 p-8 rounded-3xl border border-stone-200/50 dark:border-slate-600/50">
                <div className="flex gap-2 mb-6">
                  <span className="bg-[#173f97] dark:bg-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-bold">금형 코팅</span>
                  <span className="bg-[#50654d] dark:bg-emerald-700 text-white px-4 py-1.5 rounded-full text-xs font-bold">표면처리</span>
                </div>
                <h4 className="text-[#173f97] dark:text-blue-300 font-bold text-xl mb-3">Inorcoat 코팅</h4>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed break-keep">
                  독일 Inorcoat사의 고정밀 PVD 코팅 시스템으로 금형과 정밀부품의 표면 특성을 극대화합니다.
                </p>
              </div>
            </div>
            
            {/* CTA Banner */}
            <div className="bg-[#173f97] dark:bg-blue-900 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white gap-6">
              <div className="text-2xl md:text-3xl font-bold tracking-tight">
                Inorcoat PVD 솔루션 <br className='sm:hidden'/>도입 문의
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