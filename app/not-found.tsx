import Link from 'next/link';
import { ChevronRightIcon, HomeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: '페이지를 찾을 수 없습니다 | SEI Corporation',
  description: 'SEI Corporation - 요청하신 페이지를 찾을 수 없습니다.',
};

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 404 섹션 */}
      <section className="w-full relative py-32 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-stone-950 text-white overflow-hidden">
        {/* 배경 장식용 원형 그래픽 */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* 404 숫자 애니메이션 */}
          <div className="text-center mb-12">
            <div className="inline-block relative mb-6">
              <div className="text-9xl font-black text-white/20 dark:text-white/10 select-none">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  404
                </div>
              </div>
            </div>
          </div>

          {/* 제목과 설명 */}
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              페이지를 찾을 수 없습니다
            </h1>
            <p className="text-xl text-blue-100 dark:text-stone-300 mb-8 leading-relaxed">
              죄송합니다. 요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
              <br />
              아래 링크를 통해 원하는 정보를 찾아보세요.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <HomeIcon className="w-5 h-5" />
              홈으로 돌아가기
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-stone-700 hover:bg-stone-600 dark:bg-stone-800 dark:hover:bg-stone-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              상품 보기
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 추가 도움 섹션 */}
      <section className="w-full py-20 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-12 text-center">
            도움이 필요하신가요?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 인기 페이지 */}
            <div className="bg-stone-50 dark:bg-stone-800/50 rounded-xl p-8 border border-stone-200 dark:border-stone-700">
              <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-6">
                인기 페이지
              </h3>
              <nav className="space-y-3">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                  <span>홈</span>
                </Link>
                <Link
                  href="/products"
                  className="flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                  <span>상품</span>
                </Link>
                <Link
                  href="/solutions"
                  className="flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                  <span>솔루션</span>
                </Link>
                <Link
                  href="/vision"
                  className="flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                  <span>비전</span>
                </Link>
              </nav>
            </div>

            {/* 문의 정보 */}
            <div className="bg-stone-50 dark:bg-stone-800/50 rounded-xl p-8 border border-stone-200 dark:border-stone-700">
              <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-6">
                연락처
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <PhoneIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-stone-600 dark:text-stone-400 text-sm">전화</p>
                    <p className="font-semibold text-stone-900 dark:text-white">
                      010-3122-1428
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-stone-600 dark:text-stone-400 text-sm">이메일</p>
                    <p className="font-semibold text-stone-900 dark:text-white">
                      info@seicorp.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 빠른 링크 */}
            <div className="bg-stone-50 dark:bg-stone-800/50 rounded-xl p-8 border border-stone-200 dark:border-stone-700">
              <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-6">
                빠른 링크
              </h3>
              <nav className="space-y-3">
                <Link
                  href="/location"
                  className="flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                  <span>오시는 길</span>
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                  <span>회사소개</span>
                </Link>
                <Link
                  href="/admin-sei"
                  className="flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                  <span>관리자</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
