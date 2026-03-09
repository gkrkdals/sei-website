import { 
  BuildingOffice2Icon, 
  UserIcon, 
  MapPinIcon, 
  BriefcaseIcon,
  CubeIcon,
  BuildingLibraryIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

// 아이콘과 텍스트가 있는 커스텀 데이터 줄 컴포넌트
function InfoRow({ icon: Icon, label, value, children }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] gap-4 border-b border-stone-100 py-6 last:border-b-0 hover:bg-blue-50/50 px-4 rounded-xl transition-colors">
      <div className="flex items-center gap-3 text-stone-900/80">
        <Icon className="w-6 h-6 text-blue-700 shrink-0" />
        <span className="font-semibold text-lg">{label}</span>
      </div>
      <div className="text-stone-800 text-lg leading-relaxed pt-1 md:pt-0">
        {value}
        {children}
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 섹션: 세련된 타이포그래피 (버건디 톤) */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <BuildingOffice2Icon className="w-4 h-4" />
            <span>Company Overview</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight">
            기업 현황
          </h1>
          <p className="mt-6 text-xl text-stone-600 max-w-3xl leading-relaxed">
            창조의 의미와 가치를 바탕으로 글로벌 시장을 선도하는<br className="hidden md:block" /> 
            에스이아이(주)의 핵심 정보를 소개합니다.
          </p>
        </header>

        {/* 메인 콘텐츠: 고급스러운 카드 레이아웃 */}
        <main className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-950/5 border border-stone-100">
          <div className="space-y-2">
            
            {/* 1. 회사명 */}
            <InfoRow 
              icon={BuildingOffice2Icon} 
              label="회사명" 
              value="에스이아이 주식회사 (SEI CO., LTD.)" 
            />

            {/* 2. 대표자 */}
            <InfoRow 
              icon={UserIcon} 
              label="대표자" 
              value="민 성 현" 
            />

            {/* 3. 소재지 */}
            <InfoRow 
              icon={MapPinIcon} 
              label="주소지" 
            >
              <p>서울 마포구 토정로 304, 용현빌딩 402호</p>
              <a 
                href="/location" 
                className="inline-block mt-2 text-sm text-blue-700 hover:text-blue-900 font-medium underline underline-offset-4"
              >
                지도 보기 &rarr;
              </a>
            </InfoRow>

            {/* 4. 사업 영역 (기존 유지) */}
            <InfoRow 
              icon={BriefcaseIcon} 
              label="사업 영역"
            >
              <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700">
                <li>무역, 잉크, 필름, 섬유·원사·원단, 장비 도소매 및 중개업</li>
                <li>보안시스템 중개업, 소프트웨어판매·유통·임대업</li>
              </ul>
            </InfoRow>

            {/* 5. 주요 품목 (수정됨) */}
            <InfoRow 
              icon={CubeIcon} 
              label="주요 품목"
            >
              <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700">
                <li>보안용 실크스크린 잉크, 차량용 실크스크린 및 패드프린팅 잉크, 각종 회로 인쇄 잉크 범용 PVC, PET, PC film</li>
                <li>레이저 장비 (각인 및 패키징), 자동화 검사 및 포장 솔루션, 패드인쇄기, 디지털 인쇄기, 유리용 실크인쇄기, 원심연마기 등</li>
              </ul>
            </InfoRow>

             {/* 6. 주요거래처 (수정됨) */}
             <InfoRow 
              icon={BuildingLibraryIcon} 
              label="주요거래처"
            >
              <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700">
                <li>조폐공사, 산업은행, 국내 신용카드 제조사 외</li>
              </ul>
            </InfoRow>

            {/* 7. License (수정됨) */}
            <InfoRow 
              icon={DocumentCheckIcon} 
              label="License"
            >
              <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700">
                <li>스위스 Print Color Screen Ltd, Teca-Print AG 국내 독점대리점</li>
                <li>독일 Spaleck Oberflächentechnik, Lang Laser-system GmbH, Economa Engineering GmbH 국내 독점대리점</li>
                <li>중국 Golden Materials film제품 국내 독점대리점</li>
              </ul>
            </InfoRow>

          </div>
        </main>

        {/* 하단 장식 요소 */}
        <div className="mt-16 text-center text-sm text-stone-400">
          SEI Corporation is dedicated to creating value through innovation.
        </div>

      </div>
    </div>
  );
}