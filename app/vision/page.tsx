import { EyeIcon } from '@heroicons/react/24/outline';

export default function VisionPage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <EyeIcon className="w-4 h-4" />
            <span>Our Vision</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight">
            비전
          </h1>
        </header>

        {/* 1. 상단 메인 비전 (가로형 통합 직사각형 카드) */}
        <div className="bg-white rounded-3xl shadow-xl shadow-red-950/5 border border-stone-100 overflow-hidden flex flex-col md:flex-row mb-16">
          {/* 왼쪽: 메인 사진 (정사각형) */}
          <div className="w-full md:w-[280px] lg:w-[320px] aspect-square bg-stone-200 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-200 border-dashed text-stone-500 shrink-0 hover:bg-stone-300 transition-colors relative">
            <img 
              src="/images/vision1.png" 
              alt="SEI Corporation Vision" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* 오른쪽: 메인 비전 텍스트 */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center overflow-x-auto">
            <h2 className="text-2xl font-bold text-red-900 mb-6 border-b border-red-100 pb-4 inline-block self-start">
              에스이아이는(주)는
            </h2>
            <div className="text-xl lg:text-xl text-stone-800 leading-loose font-medium break-keep">
              <p>
                2014년 설립 이래 고객만족 경영을 지향해오고 있으며 <br />
                최고의 품질과 서비스, 신기술을 바탕으로 한 상생경영을 실천하고 있습니다. <br />
                앞으로도 도전정신을 앞세워 내실 있는 성장을 지속적으로 이루어 나갈 것이며 <br />
                고객감동의 경영을 실천해 나갈 것을 자신 있게 약속 드립니다.
              </p>
            </div>
          </div>
        </div>

        {/* 2. 하단 핵심 가치 / 전략 (이미지 축소 및 배경색 적용) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 영역 1: 고객만족 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            {/* 크기를 w-32에서 w-24로 줄이고, bg-stone-200을 bg-red-950(테마색)으로 바꿨습니다. p-3을 주어 여백을 확보했습니다. */}
            <div className="w-24 h-24 rounded-full bg-red-950 p-3 flex items-center justify-center overflow-hidden mb-6 border-4 border-white shadow-md group-hover:border-red-50 transition-colors shrink-0">
              {/* object-contain을 써서 투명 배경 이미지가 원 안에 쏙 들어오게 합니다. */}
              <img src="/images/vision2.png" alt="고객만족" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-3">고객만족</h3>
            <p className="text-stone-600 font-medium leading-relaxed">
              소비자 만족 경영<br />
              기업 가치 극대화
            </p>
          </div>

          {/* 영역 2: 파트너쉽 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-24 h-24 rounded-full bg-red-950 p-3 flex items-center justify-center overflow-hidden mb-6 border-4 border-white shadow-md group-hover:border-red-50 transition-colors shrink-0">
              <img src="/images/vision3.png" alt="파트너쉽" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-3">파트너쉽</h3>
            <p className="text-stone-600 font-medium leading-relaxed">
              튼튼한 협력관계<br />
              안정적인 공급처 확보
            </p>
          </div>

          {/* 영역 3: 제품 품질 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-24 h-24 rounded-full bg-red-950 p-3 flex items-center justify-center overflow-hidden mb-6 border-4 border-white shadow-md group-hover:border-red-50 transition-colors shrink-0">
              <img src="/images/vision4.png" alt="제품 품질" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-3">제품 품질</h3>
            <p className="text-stone-600 font-medium leading-relaxed">
              차별화 된 제품 공급<br />
              가격 경쟁력 보유
            </p>
          </div>

          {/* 영역 4: 글로벌 네트워크 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-24 h-24 rounded-full bg-red-950 p-3 flex items-center justify-center overflow-hidden mb-6 border-4 border-white shadow-md group-hover:border-red-50 transition-colors shrink-0">
              <img src="/images/vision5.png" alt="글로벌 네트워크" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-3">글로벌 네트워크</h3>
            <p className="text-stone-600 font-medium leading-relaxed">
              지속적인 해외 투자<br />
              해외 거래처 발굴
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}