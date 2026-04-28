import { notFound } from 'next/navigation';
import {prisma} from '@/lib/prisma';

// 🌟 Next.js 15의 변경점: params는 이제 Promise 형태입니다.
type Props = {
  params: Promise<{ slug: string }>;
};

// 1. 페이지 컴포넌트
export default async function ProductDetailPage({ params }: Props) {
  // 🌟 params를 사용할 때 반드시 await으로 먼저 풀어주어야 합니다!
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // DB에서 해당 슬러그를 가진 제품 찾기
  const product = await prisma.product.findUnique({
    where: { slug: slug },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50/30 dark:bg-slate-950">
      {/* 상단 히어로 영역 */}
      <section className=" py-20 border-b border-stone-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white mb-4 leading-tight">
            {product.title}
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 상세 내용 영역 */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div 
          className="prose dark:prose-invert prose-stone dark:prose-stone max-w-none 
            prose-headings:font-black prose-headings:text-stone-900 dark:prose-headings:text-white
            prose-p:text-stone-600 dark:prose-p:text-stone-300 prose-p:leading-relaxed
            prose-a:text-blue-600 dark:prose-a:text-blue-400
            prose-strong:text-stone-900 dark:prose-strong:text-white
            prose-img:rounded-3xl prose-img:shadow-xl dark:prose-img:shadow-black/50 prose-img:my-12"
          dangerouslySetInnerHTML={{ __html: product.description }} 
        />
      </article>

      {/* 하단 푸터 느낌의 안내 */}
      <footer className="max-w-4xl mx-auto px-6 py-20 border-t border-stone-100 dark:border-slate-800 text-center">
        <p className="text-stone-400 dark:text-stone-600 text-sm font-medium">
          에스이아이(주) 제품에 대해 더 궁금하신 점은 고객센터로 문의해 주시기 바랍니다.
        </p>
      </footer>
    </div>
  );
}

// 2. 메타데이터 생성 함수
export async function generateMetadata({ params }: Props) {
  // 🌟 여기서도 마찬가지로 await으로 풀어줍니다!
  const resolvedParams = await params;
  
  const product = await prisma.product.findUnique({ 
    where: { slug: resolvedParams.slug } 
  });
  
  return {
    title: product ? `${product.title} | 에스이아이(주)` : '제품 소개',
  };
}