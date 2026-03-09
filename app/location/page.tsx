import { MapIcon, MapPinIcon, PhoneIcon, PrinterIcon } from '@heroicons/react/24/outline';

export default function LocationPage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <MapIcon className="w-4 h-4" />
            <span>Location</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight">
            오시는 길
          </h1>
        </header>

        {/* 메인 콘텐츠: 좌측 지도 / 우측 인포메이션 */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* 왼쪽: 지도 이미지 및 대중교통 안내 */}
          <div className="flex-1 bg-white rounded-3xl shadow-xl shadow-red-950/5 border border-stone-100 overflow-hidden flex flex-col">
            
            {/* 지도 이미지 영역 (Placeholder) */}
            <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-stone-200 relative group overflow-hidden border-b border-stone-100 flex items-center justify-center">
              
              <img src="/images/location.png" alt="에스이아이(주) 오시는 길" className="absolute inset-0 w-full h-full object-contain transition-transform duration-500" />
              {/* <img src="/images/map-image.png" alt="에스이아이(주) 오시는 길" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> */}
            </div>
            
            {/* 대중교통 안내 바 */}
            <div className="p-6 md:p-8 bg-stone-50 text-center flex justify-center items-center">
              <p className="text-xl md:text-2xl font-bold text-stone-800 tracking-tight flex items-center gap-3">
                {/* 5호선을 상징하는 보라색 포인트 원 */}
                <span className="w-4 h-4 rounded-full bg-purple-600 shadow-sm shrink-0"></span>
                지하철 5호선 마포역 1번 출구 - 도보 200M
              </p>
            </div>
          </div>

          {/* 오른쪽: 주소 및 연락처 카드 */}
          <div className="w-full lg:w-96 flex flex-col gap-6 shrink-0">
            
            {/* 주소 카드 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col gap-4 hover:border-red-200 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-2">
                <MapPinIcon className="w-7 h-7 text-red-700" />
              </div>
              <h2 className="text-2xl font-bold text-stone-900">주소</h2>
              <p className="text-lg text-stone-700 font-medium leading-relaxed break-keep">
                서울 마포구 토정로 304,<br/>용현빌딩 402호
              </p>
            </div>

            {/* 연락처 카드 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col gap-4 hover:border-red-200 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-2">
                <PhoneIcon className="w-7 h-7 text-red-700" />
              </div>
              <h2 className="text-2xl font-bold text-stone-900">연락처</h2>
              <div className="space-y-4 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                    <PhoneIcon className="w-4 h-4 text-stone-600" />
                  </div>
                  <p className="text-lg text-stone-800 font-bold tracking-wide">TEL: 010-3122-1428</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                    <PrinterIcon className="w-4 h-4 text-stone-600" />
                  </div>
                  <p className="text-lg text-stone-700 font-medium tracking-wide">FAX: 031-560-9914</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}