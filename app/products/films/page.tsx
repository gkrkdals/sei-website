import { Square3Stack3DIcon } from '@heroicons/react/24/outline';

export default function FilmsPage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <Square3Stack3DIcon className="w-4 h-4" />
            <span>Products 5</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight">
            PVC/PET/PC/PP등 필름
          </h1>
        </header>

        {/* 1번 문단: 필름 종류 및 설명 (블루/슬레이트 톤의 라벨 디자인 반영) */}
        <section className="mb-24 flex flex-col gap-6">
          
          {/* 1. Biometrics 특수코팅 pc필름 */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            {/* 원본 슬라이드의 짙은 슬레이트 색상 반영 */}
            <div className="lg:w-64 bg-slate-600 text-white p-6 flex flex-col items-center justify-center text-center shrink-0">
              <span className="text-lg font-medium opacity-90 mb-1">Biometrics</span>
              <h3 className="text-xl font-bold tracking-wide break-keep">특수코팅 pc필름</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex items-center">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                  <p className="text-stone-700 font-medium break-keep">
                    여권, 신분증 등의 보안요소로 사용되는 Biometrics 구현을 기존 발급장비로 구현 하도록 하는 특수코팅 처리된 pc film 공급
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. PC overlay 필름 */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            {/* 원본 슬라이드의 파란색 반영 */}
            <div className="lg:w-64 bg-blue-700 text-white p-6 flex items-center justify-center text-center shrink-0">
              <h3 className="text-xl font-bold tracking-wide">PC overlay 필름</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex items-center">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                  <p className="text-stone-700 font-medium break-keep">
                    쉽게 스크래치가 나는 pc필름 특성상 ID카드 또는 여권 등에 사용시에는 스크래치 방지 코팅이 필수이며 우수한 품질로 스크래치 코팅된 pc overlay 필름 공급
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. 기타 PVC/PC/PET 소재 필름 */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col lg:flex-row overflow-hidden hover:shadow-md transition-shadow">
            {/* 원본 슬라이드의 밝은 파란색/인디고 톤 반영 */}
            <div className="lg:w-64 bg-indigo-400 text-white p-6 flex flex-col items-center justify-center text-center shrink-0">
              <span className="text-lg font-medium opacity-90 mb-1">기타</span>
              <h3 className="text-xl font-bold tracking-wide break-keep">PVC/PC/PET 소재 필름</h3>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                  <p className="text-stone-700 font-medium break-keep">
                    25 micron의 얇은 pvc overlay는 전세계적으로 거의 없으며 당사의 뛰어난 기술로 해당 원단을 국내 공급중임.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                  <p className="text-stone-700 font-medium break-keep">
                    기타 제약 포장용 PVDC, Al-foil 등의 특수원단 공급.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                  <p className="text-stone-700 font-medium break-keep">
                    각종 범용 PVC, PET, PC, PP, PE, r-PVC 원단 공급.
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </section>

        {/* 2번 문단: 적용 사례 이미지 (핑크색 라벨) */}
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-8 pl-2 border-l-4 border-red-700">
            주요 적용 분야
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 사례 1: 신용카드 */}
            <div className="bg-white rounded-3xl shadow-md border border-stone-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-full aspect-square bg-stone-100 relative overflow-hidden flex items-center justify-center border-b border-stone-200">
                <img src="/images/products/films/img1.png" alt="신용카드" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0" />
                {/* <img src="/images/film-card.jpg" alt="신용카드" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0" /> */}
              </div>
              {/* 원본 슬라이드의 핑크색 라벨 박스 */}
              <div className="bg-pink-500 text-white text-center py-4">
                <h3 className="text-xl font-bold tracking-widest">신용카드</h3>
              </div>
            </div>

            {/* 사례 2: 제약포장재 */}
            <div className="bg-white rounded-3xl shadow-md border border-stone-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-full aspect-square bg-stone-100 relative overflow-hidden flex items-center justify-center border-b border-stone-200">
                <img src="/images/products/films/img2.png" alt="제약포장재" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0" />
                {/* <img src="/images/film-medicine.jpg" alt="제약포장재" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0" /> */}
              </div>
              <div className="bg-pink-500 text-white text-center py-4">
                <h3 className="text-xl font-bold tracking-widest">제약포장재</h3>
              </div>
            </div>

            {/* 사례 3: 여 권 */}
            <div className="bg-white rounded-3xl shadow-md border border-stone-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-full aspect-square bg-stone-100 relative overflow-hidden flex items-center justify-center border-b border-stone-200">
                <img src="/images/products/films/img3.png" alt="여 권" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0" />
                {/* <img src="/images/film-passport.jpg" alt="여 권" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0" /> */}
              </div>
              <div className="bg-pink-500 text-white text-center py-4">
                <h3 className="text-xl font-bold tracking-widest">여 권</h3>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}