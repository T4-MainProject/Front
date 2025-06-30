// src/pages/Waiting.jsx
import React from 'react';

function LangCheckWaiting() {
  return (
    <div className="min-h-screen bg-peach-100 flex flex-col items-center justify-center text-center">
      <header className="w-full p-4 flex justify-between items-center">
        <img src="/logo.png" className="h-10" alt="LangCheck Logo" />
        <nav className="space-x-4">
          <a href="#">서비스 소개</a>
          <a href="#">공지사항</a>
          <a href="#">사용자 게시판</a>
          <a href="#">서비스 문의</a>
        </nav>
      </header>
      <h2 className="text-3xl font-bold mt-12">대기 중...</h2>
      <div className="mt-6 bg-yellow-300 p-4 rounded font-bold text-lg">남은 시간: 03:12</div>
      <p className="mt-4 text-xl">75% 완료</p>
      <div className="w-64 h-4 bg-gray-300 rounded-full overflow-hidden mt-2">
        <div className="bg-blue-800 h-full w-3/4"></div>
      </div>
      <img src="/mascot.png" alt="Mascot" className="h-32 mt-6" />
    </div>
  );
}

export default LangCheckWaiting;
