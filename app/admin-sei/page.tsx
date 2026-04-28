"use client";

import { useState, useEffect, useRef } from 'react';
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';

export default function AdminBackdoor() {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  const editorRef = useRef<any>(null);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    if (res.ok) setProducts(await res.json());
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleSelectProduct = (product: any) => {
    setSelectedProduct(product);
    setTitle(product.title);
    setSlug(product.slug);
    
    setTimeout(() => {
      editorRef.current?.setContent(product.description || "");
    }, 0);
  };

  const handleSubmit = async () => {
    const finalContent = editorRef.current?.getHTML();

    // 제목 검사
    if (!title || title.trim() === "") {
      return alert("제목을 입력해주세요.");
    }

    // 슬러그 검사
    if (!slug || slug.trim() === "") {
      return alert("URL 슬러그를 입력해주세요.");
    }

    // 슬러그 형식 검사 (영문, 숫자, 하이픈만 허용)
    const slugRegex = /^[a-zA-Z0-9-]+$/;
    if (!slugRegex.test(slug)) {
      return alert("URL 형식은 영문, 숫자, 하이픈만 사용 가능합니다.");
    }

    // 내용 검사
    if (!finalContent || finalContent === '<p></p>') {
      return alert("내용을 입력해주세요.");
    }
    
    const method = selectedProduct ? 'PATCH' : 'POST';
    const res = await fetch('/api/products', {
      method, 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        id: selectedProduct?.id, 
        title, 
        slug, 
        description: finalContent 
      }),
    });
    
    if (res.ok) {
      alert("저장 성공!");
      handleReset(); 
      fetchProducts();
    } else {
      alert("저장 실패. 슬러그 중복 여부를 확인하세요.");
    }
  };

  // 🌟 새롭게 추가된 삭제 로직
  const handleDelete = async () => {
    if (!selectedProduct) return;
    
    // 실수로 누르는 것을 방지하기 위한 확인 창
    if (!confirm("정말로 이 제품을 삭제하시겠습니까? 삭제 후에는 복구할 수 없습니다.")) {
      return;
    }

    const res = await fetch(`/api/products?id=${selectedProduct.id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      alert("성공적으로 삭제되었습니다.");
      handleReset();
      fetchProducts();
    } else {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  const handleReset = () => {
    setSelectedProduct(null); 
    setTitle(""); 
    setSlug(""); 
    editorRef.current?.setContent("");
  };

  return (
    <div className="h-screen bg-stone-100 flex flex-col font-sans overflow-hidden">
      
      <div className="flex-1 flex gap-8 p-8 min-h-0 mt-13">
        
        {/* --- 좌측: 카테고리 리스트 --- */}
        <aside className="w-80 bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col">
          <div className="p-5 border-b border-stone-100 bg-stone-50 shrink-0">
            <h2 className="font-bold">제품 카테고리</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-1">
            {products.map((p) => (
              <button key={p.id} onClick={() => handleSelectProduct(p)} className={`w-full text-left p-3 rounded-xl transition-all ${selectedProduct?.id === p.id ? 'bg-blue-600 text-white' : 'hover:bg-stone-50 text-stone-600'}`}>
                <div className="font-bold text-sm">{p.title}</div>
              </button>
            ))}
          </div>
          {selectedProduct && (
            <div className="p-3 bg-stone-50 flex shrink-0">
              <button onClick={handleReset} className="w-full py-2.5 text-xs font-bold text-stone-600 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors shadow-sm">
                + 새 제품 작성하기
              </button>
            </div>
          )}
        </aside>

        {/* --- 우측: 에디터 폼 --- */}
        <main className="flex-1 bg-white rounded-2xl shadow-sm border border-stone-200 flex flex-col overflow-hidden">
          
          <div className="p-8 pb-4 border-b border-stone-100 bg-white shrink-0">
            <input 
              value={title} onChange={(e) => setTitle(e.target.value)}
              placeholder="제품의 제목을 입력하세요"
              className="w-full text-4xl font-extrabold text-stone-800 placeholder:text-stone-300 outline-none my-2"
            />
            <div className="flex items-center gap-2 text-sm mt-4">
              <span className="text-stone-400 font-medium">URL 경로 : /products/</span>
              <input 
                value={slug} onChange={(e) => setSlug(e.target.value)} disabled={!!selectedProduct}
                placeholder="url를 입력하세요 (영문, 숫자, 하이픈만)"
                className="font-bold text-blue-600 outline-none w-64 placeholder:text-blue-200 disabled:opacity-50"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto min-h-0 bg-white">
            <SimpleEditor ref={editorRef} />
          </div>

        </main>
      </div>

      {/* --- 🌟 하단: 액션 버튼 바 (삭제 & 저장) --- */}
      <div className="shrink-0 p-4 px-8 border-t border-stone-200 bg-white flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
        
        {/* 왼쪽: 삭제 버튼 (제품이 선택되었을 때만 보임) */}
        <div>
          {selectedProduct && (
            <button 
              onClick={handleDelete} 
              className="px-6 py-2.5 text-sm font-bold text-red-500 bg-transparent hover:bg-red-50 rounded-lg transition-colors"
            >
              🗑️ 이 제품 삭제하기
            </button>
          )}
        </div>

        {/* 오른쪽: 저장 버튼 */}
        <button 
          onClick={handleSubmit} 
          className="px-10 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
        >
          {selectedProduct ? '수정 내용 저장' : '새 제품 등록'}
        </button>
        
      </div>
    </div>
  );
}