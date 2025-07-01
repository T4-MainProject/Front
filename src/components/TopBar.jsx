import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function TopBar() {
  const topBarRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(topBarRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <div 
      ref={topBarRef}
      className="bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 border-b border-blue-100/50 overflow-hidden relative"
    >
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
      
      <div className="container mx-auto flex justify-between items-center py-3 px-4 text-sm relative z-10">
        <div className="hidden sm:flex items-center space-x-3 text-blue-700">
          <span className="text-lg animate-bounce">🎉</span>
          <span className="font-semibold">신규 가입 시 첫 50장 무료!</span>
          <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold animate-pulse">
            HOT
          </span>
        </div>
        
        <div className="flex items-center space-x-6 ml-auto">
          <a 
            href="#" 
            className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group overflow-hidden"
          >
            <span className="relative z-10">회원가입</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <div className="w-px h-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          <a 
            href="#" 
            className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group overflow-hidden"
          >
            <span className="relative z-10">로그인</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </div>
  );
}