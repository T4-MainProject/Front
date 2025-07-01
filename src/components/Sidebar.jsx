import React from 'react';

export default function Sidebar({ onNext }) {
  return (
    <aside className="w-full md:w-80 bg-white p-6 rounded-lg shadow-md space-y-6">
      <button
        onClick={onNext}
        className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition"
      >
        내시험지<br/>채점하기
      </button>
      <div className="flex flex-col items-center space-y-2">
        <strong className="text-gray-700">시작하기</strong>
        <img src="/start.png" alt="Start" className="w-40 h-auto" />
      </div>
    </aside>
  );
}
