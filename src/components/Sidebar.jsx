// ============================================
// src/components/Sidebar.jsx
// ============================================
import React from 'react';

export default function Sidebar({ onNext }) {
  return (
    <div className="lg:w-80 w-full">
      {/* 무료 체험 카드 */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl mb-8 relative overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-4">지금 바로 시작하세요!</h3>
          <p className="text-blue-100 mb-6 leading-relaxed">
            첫 10장 무료 체험으로 AI 자동 채점의 놀라운 성능을 경험해보세요.
          </p>
          
          <button 
            onClick={onNext}
            className="w-full bg-white text-purple-600 px-6 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <span className="flex items-center justify-center">
              무료로 시작하기
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* 기능 하이라이트 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">⭐</span>
          주요 기능
        </h4>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800">99.8% 정확도</h5>
              <p className="text-sm text-gray-600">YOLO8 + OCR + GPT 결합</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800">2.3초 평균 처리</h5>
              <p className="text-sm text-gray-600">빠른 실시간 채점</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800">상세한 해설</h5>
              <p className="text-sm text-gray-600">AI가 생성하는 맞춤 해설</p>
            </div>
          </div>
        </div>
      </div>

      {/* 고객 후기 */}
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">💬</span>
          고객 후기
        </h4>
        
        <div className="space-y-4">
          <blockquote className="bg-white p-4 rounded-xl border-l-4 border-blue-500">
            <p className="text-sm text-gray-700 mb-2">
              "정말 놀라울 정도로 정확해요! 이제 채점 시간을 90% 단축시켰습니다."
            </p>
            <cite className="text-xs text-gray-500 font-medium">
              - 김영희 선생님, 서울고등학교
            </cite>
          </blockquote>
          
          <blockquote className="bg-white p-4 rounded-xl border-l-4 border-purple-500">
            <p className="text-sm text-gray-700 mb-2">
              "학생들이 해설을 보고 스스로 공부하게 되었어요."
            </p>
            <cite className="text-xs text-gray-500 font-medium">
              - 박민수 선생님, 대전중학교
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
}