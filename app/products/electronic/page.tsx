import { CpuChipIcon } from '@heroicons/react/24/outline';

export default function ElectronicInkPage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <CpuChipIcon className="w-4 h-4" />
            <span>Products 3</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight">
            전자기판용 잉크
          </h1>
        </header>

        {/* 1. 상단 텍스트 박스 */}
        <section className="mb-16">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-200 inline-block w-full md:w-auto min-w-[50%]">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-red-700 shrink-0"></span>
                <p className="text-xl text-stone-800 font-bold tracking-wide">멤브레인 스위치</p>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-red-700 shrink-0"></span>
                <p className="text-xl text-stone-800 font-bold tracking-wide">RFID 안테나 인쇄</p>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-red-700 shrink-0"></span>
                <p className="text-xl text-stone-800 font-bold tracking-wide">각종 인쇄 센서.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 하단 이미지 영역 (좌측: 직사각형 / 우측: 원형) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center md:justify-items-start">
          
          {/* 왼쪽: 터치 패널/스크린 이미지 (직사각형) */}
          <div className="w-full aspect-[4/3] bg-stone-200 rounded-3xl flex items-center justify-center border border-stone-200 shadow-md overflow-hidden relative group">
            <span className="text-lg font-bold text-stone-500 absolute z-10">
              <img src="/images/products/electronic/touchpanel.png" alt="멤브레인 스위치" className="w-full h-full object-cover transition-transform duration-500" />
            </span>
            {/* 호버 시 부드러운 확대 효과 */}
            {/* <img src="/images/electronic-1.jpg" alt="멤브레인 스위치" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> */}
          </div>

          {/* 오른쪽: 기판 회로 이미지 (원형) */}
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-stone-200 rounded-full flex items-center justify-center border-8 border-white shadow-xl overflow-hidden relative group md:justify-self-center">
            <span className="text-lg font-bold text-stone-500 absolute z-10 transition-opacity">
              <img src="/images/products/electronic/circuit.png" alt="RFID 안테나 인쇄" className="w-100 h-full object-cover transition-transform duration-500" />
            </span>
            {/* 호버 시 부드러운 확대 효과 */}
            {/* <img src="/images/electronic-2.jpg" alt="RFID 안테나 인쇄" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> */}
          </div>

        </section>

      </div>
    </div>
  );
}