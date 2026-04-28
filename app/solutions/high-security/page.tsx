import { SparklesIcon } from '@heroicons/react/24/outline';

export default function HighSecuritySolutionPage() {
  return (
    <div className="w-full bg-stone-50/30 dark:bg-slate-950 py-16 md:py-24 pt-20 md:pt-0">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 페이지 헤더 */}
        <header className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <SparklesIcon className="w-4 h-4" />
            <span>Solutions 5</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 dark:text-white tracking-tighter leading-tight">
            High Security
          </h1>
        </header>

        {/* 상세 내용은 추후 업데이트 예정 */}
        <section className="bg-white dark:bg-slate-800 p-12 rounded-3xl shadow-xl shadow-blue-950/5 dark:shadow-black/50 border border-stone-100 dark:border-slate-700 text-center">
          <p className="text-stone-500 dark:text-stone-400 text-lg">상세 콘텐츠를 준비 중입니다.</p>
        </section>

      </div>
    </div>
  );
}
