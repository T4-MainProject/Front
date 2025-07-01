// src/components/Hero.jsx
import React from 'react'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center text-center h-72 md:h-96 overflow-hidden">
      {/* 비디오 배경 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/13929368_2560_1440_30fps.mp4" type="video/mp4" />
        {/* 비디오를 지원하지 않는 브라우저를 위한 폴백 */}
        Your browser does not support the video tag.
      </video>

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 텍스트 그룹 전체에 fade-down */}
      <div 
        className="relative z-10 max-w-2xl px-4"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          AI 기반 똑똑한 노트 정리, <span className="text-primary">CloVA Note</span>
        </h1>
        <p className="text-lg text-white/90 mb-6">
          음성 녹취, 키워드 요약, 협업 기능까지 한 번에.
        </p>

        {/* 버튼 그룹은 zoom-in */}
        <div className="flex justify-center space-x-4" data-aos="zoom-in">
          <button className="bg-primary text-white py-3 px-8 rounded-full hover:bg-primary-dark transition">
            무료로 시작하기
          </button>
          <button className="bg-white text-primary py-3 px-8 rounded-full hover:bg-gray-100 transition">
            데모 보기
          </button>
        </div>
      </div>
    </section>
  )
}
