import { BeakerIcon, ShieldCheckIcon, DocumentPlusIcon } from '@heroicons/react/24/outline';

export default function SilkscreenInkPage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <BeakerIcon className="w-4 h-4" />
            <span>Products 1</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight">
            실크스크린용 잉크
          </h1>
        </header>

        {/* --- 1번 문단: 보안용 특수잉크 --- */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-red-900 pb-4">
            <ShieldCheckIcon className="w-8 h-8 text-red-800" />
            <h2 className="text-3xl font-bold text-stone-900">
              보안용 특수잉크
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* 왼쪽: 잉크 종류 리스트 (5개) */}
            <div className="flex-1 flex flex-col gap-4">
              
              {/* 1. UV 발광잉크 */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:w-56 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 flex items-center justify-center text-center shrink-0">
                  <h3 className="text-lg font-bold tracking-wide">UV(자외선) <br/> 발광잉크</h3>
                </div>
                <div className="p-6 md:p-8 flex-1 flex items-center">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                      <p className="text-stone-700 font-medium">자외선 투사 시 빨강, 파랑, 녹색등 으로 보이게 하는 보안기능 특수 잉크</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                      <p className="text-stone-700 font-medium">다양한 색상의 발광잉크 생산 중</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-700 mt-2.5 shrink-0"></span>
                      <p className="text-stone-900 font-bold">조폐공사 기술연구원에서 자사 빨간색 UV발광 잉크사용</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2. OSI */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:w-56 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 flex items-center justify-center text-center shrink-0">
                  <h3 className="text-lg font-bold tracking-wide">O S I <br/> <span className="text-sm font-medium">(Optical Shifting Ink)</span></h3>
                </div>
                <div className="p-6 md:p-8 flex-1 flex items-center">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                      <p className="text-stone-700 font-medium">각도에 따라 보여지는 색상이 다양하게 변화</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                      <p className="text-stone-700 font-medium">한국조폐공사 카드부 공무원증에 자사의 잉크 적용검토 중</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-700 mt-2.5 shrink-0"></span>
                      <p className="text-stone-900 font-bold">한국산업은행 사원증에 자사잉크 적용</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Metamerie Ink */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:w-56 bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 flex items-center justify-center text-center shrink-0">
                  <h3 className="text-lg font-bold tracking-wide">Metamerie Ink</h3>
                </div>
                <div className="p-6 md:p-8 flex-1 flex items-center">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                      <p className="text-stone-700 font-medium">태양광 아래서는 같은색으로 보이나 인조광 아래서는 다른색으로 보이는 보안기능 특수잉크</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-700 mt-2.5 shrink-0"></span>
                      <p className="text-stone-900 font-bold">조폐공사 기술연구원에서 시험평가 중</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 4. 편광잉크 */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:w-56 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 flex items-center justify-center text-center shrink-0">
                  <h3 className="text-lg font-bold tracking-wide">편광잉크</h3>
                </div>
                <div className="p-6 md:p-8 flex-1 flex items-center">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                      <p className="text-stone-700 font-medium">눈으로 보여지지 않으나 편광필름을 대면 이미지가 보이는 잉크</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 5. 기타특수잉크 */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:w-56 bg-gradient-to-br from-amber-400 to-amber-500 text-stone-900 p-6 flex items-center justify-center text-center shrink-0">
                  <h3 className="text-lg font-bold tracking-wide">기타특수잉크</h3>
                </div>
                <div className="p-6 md:p-8 flex-1 flex items-center">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                      <p className="text-stone-700 font-medium">특수장비를 이용하여 구분 가능한 등급의 보안잉크부터 다양한 solution 제공</p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* 오른쪽: 통합 적용 사례 박스 (Sticky 효과로 스크롤 시 따라다님) */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="bg-stone-100/80 rounded-3xl p-8 border border-stone-200 h-full min-h-[300px] flex flex-col justify-center items-center text-center sticky top-28">
                <div className="space-y-10">
                  <div>
                    <p className="text-xl font-extrabold text-stone-800 leading-snug break-keep">
                      독일 터키 ID카드,<br/>여권 등에 사용
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-stone-800 leading-snug">
                      미국<br/>
                      <span className="border-b-2 border-stone-800 inline-block pb-1 mt-1">US GPO 등록</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-amber-700 leading-snug break-keep">
                      국내카드사 적용 중
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- 2번 문단: 기타잉크 --- */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b-2 border-red-900 pb-4">
            <DocumentPlusIcon className="w-8 h-8 text-red-800" />
            <h2 className="text-3xl font-bold text-stone-900">
              기타잉크
            </h2>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-[calc(100%-19.5rem)]"> {/* 위의 왼쪽 컬럼 너비와 맞춤 */}
            
            {/* 1. IRB 적외선차단 잉크 */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:w-56 bg-gradient-to-br from-amber-600 to-orange-600 text-white p-6 flex items-center justify-center text-center shrink-0">
                <h3 className="text-lg font-bold tracking-wide">IRB <br/> 적외선차단 잉크</h3>
              </div>
              <div className="p-6 md:p-8 flex-1 flex items-center">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                    <p className="text-stone-700 font-medium">투명 또는 반투명</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-700 mt-2.5 shrink-0"></span>
                    <p className="text-stone-900 font-bold">신용카드 제조를 위해서 필수적으로 사용</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                    <p className="text-stone-700 font-medium">우리, 신한, 삼성카드 등에서 사용</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Haptic 잉크 */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:w-56 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 flex items-center justify-center text-center shrink-0">
                <h3 className="text-lg font-bold tracking-wide">Haptic 잉크</h3>
              </div>
              <div className="p-6 md:p-8 flex-1 flex items-center">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-700 mt-2.5 shrink-0"></span>
                    <p className="text-stone-900 font-bold">보이는 것 뿐만 아니라 질감까지 표현하는 특수 잉크</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. 기 타 */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:w-56 bg-gradient-to-br from-orange-600 to-amber-700 text-white p-6 flex items-center justify-center text-center shrink-0">
                <h3 className="text-lg font-bold tracking-wide">기 타</h3>
              </div>
              <div className="p-6 md:p-8 flex-1 flex items-center">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></span>
                    <p className="text-stone-700 font-medium">VISA, MASTAR 승인을 받은 각종 PVC/PC/PET 전용 잉크 공급 중</p>
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