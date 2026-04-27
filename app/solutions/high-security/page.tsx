import { SparklesIcon } from '@heroicons/react/24/outline';

export default function HighSecuritySolutionPage() {
  return (
    <div className="w-full bg-stone-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <SparklesIcon className="w-4 h-4" />
            <span>Solutions 5</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tighter leading-tight">
            High Security
          </h1>
        </header>

        {/* 상세 내용은 추후 업데이트 예정 */}
        <section className="bg-white p-12 rounded-3xl shadow-xl shadow-blue-950/5 border border-stone-100 text-center">
          <p className="text-stone-500 text-lg">상세 콘텐츠를 준비 중입니다.</p>
        </section>

      </div>
    </div>
  );
}
