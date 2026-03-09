import { GlobeAltIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. 히어로(Hero) 섹션: 다크 버건디/브라운 톤 */}
      <section className="w-full relative py-24 bg-blue-950 text-white overflow-hidden">
        {/* [NEW] 무저작권 비즈니스 사진 배경, 버건디 틴트 적용 */}
        {/* [수정됨] 믹스블렌드를 빼고 투명도를 50%로 설정하여 사진 본연의 형태가 잘 보이게 함 */}
        <img 
          src="/images/hero-business.png" 
          alt="Business Collaboration" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0" 
        />
        
        {/* [수정됨] 통째로 90%로 덮던 방식을 버리고, 색상 자체에 투명도(/80, /60, /40)를 주어 사진이 은은하게 비치도록 그라데이션 조절 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/60 to-yellow-900/40 z-0"></div>

        {/* 배경 장식용 원형 그래픽 (레이저/열기 느낌) */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-700 text-blue-100 text-sm font-semibold tracking-wider mb-6">
            WELCOME TO SEI CORPORATION
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            창조의 의미와 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              가치가 있는 기업
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-50/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            세계 최고 수준의 산업용 장비와 특수 잉크 솔루션으로<br className="hidden sm:block"/>
            고객의 비즈니스에 혁신적인 경쟁력을 더해드립니다.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/profile" className="px-8 py-4 bg-white text-blue-950 font-bold text-sm rounded-full hover:bg-stone-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              기업 현황 보기
            </Link>
            <Link href="/solutions/laser" className="px-8 py-4 bg-blue-800/40 text-white font-bold text-sm rounded-full border border-blue-700 hover:bg-blue-700/50 transition-all duration-300 backdrop-blur-sm">
              솔루션 둘러보기
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 회사 소개 (1-1 문서 내용 반영) - 웜스톤 포인트 컬러 */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 카드 1 */}
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
              <GlobeAltIcon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">글로벌 라이선스 파트너십</h3>
            <p className="text-stone-600 leading-relaxed">
              세계적 기술력을 가진 <strong className='text-stone-900 font-semibold'>스위스 Print Color Screen Ltd,
              TECA-PRINT , 독일의 Spaleck Oberflächentechnik, Lang-Laser,
              Economa, 미국의 Stardust</strong> 등과 라이선스 계약을 통해 국내
              판권을 점유하고 있으며, 고품질의 창의적인 제품을 국내 대기업
              및 공공기관에 공급하고 있습니다.
            </p>
          </div>

          {/* 카드 2 */}
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group md:-translate-y-8">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
              <ShieldCheckIcon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">압도적인 품질과 신뢰</h3>
            <p className="text-stone-600 leading-relaxed">
              앞선 기술력과 글로벌 네트워크를 바탕으로 경쟁력 있는 품질과 가격의 제품을 공급받고 있으며, <strong className="text-stone-900 font-semibold">안정적인 공급망 확보를 통해 납품 기한을 철저하게 준수</strong>하고 있습니다.
            </p>
          </div>

          {/* 카드 3 */}
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
              <LightBulbIcon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">지속적인 가치 창조</h3>
            <p className="text-stone-600 leading-relaxed">
              앞으로도 ‘에스이아이㈜'는 경영자원의 효율적 운용을 바탕으로
              핵심인력을 양성하여 당사의 사업전문성을 강화해나감으로써
              대한민국을 대표하는 <strong className='text-stone-900 font-semibold'>진정한 글로벌 가치 창조 기업이</strong> 되도록
              하겠습니다.
            </p>
          </div>

        </div>
      </section>

      {/* 3. 간단한 Call to Action 배너 */}
      <section className="w-full bg-blue-50 py-20 mb-12 rounded-3xl max-w-6xl mx-auto px-6 text-center border border-blue-100">
        <h2 className="text-3xl font-bold text-stone-900 mb-6 tracking-tight">에스이아이(주)의 비전을 확인해보세요</h2>
        <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
          끊임없는 혁신과 도전으로 미래 산업을 선도하는 우리의 청사진을 소개합니다.
        </p>
        <Link href="/vision" className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-700 text-blue-700 font-bold rounded-full hover:bg-blue-700 hover:text-white transition-colors duration-300">
          비전 페이지로 이동 &rarr;
        </Link>
      </section>

    </div>
  );
}