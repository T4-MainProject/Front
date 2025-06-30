// src/pages/Home.jsx
import React from 'react';

function LangCheckHome({ onNext }) {
  return (
    <div className="min-h-screen bg-pink-100">
      <header className="flex justify-between items-center bg-white p-4 shadow">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="LangCheck Logo" className="h-8" />
          <h1 className="text-xl font-bold">LangCheck</h1>
        </div>
        <nav className="space-x-4 text-sm">
          <button>확인가입</button>
          <button>로그인</button>
        </nav>
      </header>
      <nav className="flex justify-center bg-blue-100 py-2 space-x-6 text-sm font-medium">
        <a href="#">서비스 소개</a>
        <a href="#">공지사항</a>
        <a href="#">사용자 게시판</a>
        <a href="#">서비스 문의</a>
      </nav>
      <main className="p-6 grid grid-cols-3 gap-6">
        <section className="col-span-2 bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">서비스 업데이트 및 공지사항</h2>
          <p className="text-sm text-gray-600">업데이트 내용 표시</p>
        </section>
        <aside className="bg-white p-4 rounded shadow space-y-4">
          <button onClick={onNext} className="bg-cyan-200 w-full py-2 rounded text-center font-bold">내시험지 채점하기</button>
          <div className="text-center">
            <img src="/start.png" alt="Start" className="mx-auto mb-2" />
            <img src="/upload.png" alt="Upload" className="mx-auto mb-2" />
            <img src="/results.png" alt="Results" className="mx-auto" />
          </div>
        </aside>
      </main>
    </div>
  );
}

export default LangCheckHome;
