// ============================================
// pages/Home.jsx
// ============================================
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout Components
import TopBar from '../components/TopBar';
import AppHeader from '../components/AppHeader';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Section Components
import Hero from '../components/Hero';
import FeatureExplanation from '../components/FeatureExplanation';
import FeatureList from '../components/FeatureList';
import CustomerCarousel from '../components/CustomerCarousel';
import PricingTable from '../components/PricingTable';
import ContentLeft from '../components/ContentLeft';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100
    });

    // 스크롤 시 AOS 새로고침
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    // 페이지 로드 완료 후 스크롤 위치 조정
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 업로드 페이지로 이동하는 함수
  const handleStartUpload = () => {
    navigate('/upload');
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* 최상단 바 */}
      <TopBar />
      
      {/* 헤더 */}
      <AppHeader />
      
      {/* 네비게이션 */}
      <NavBar />

      {/* 메인 콘텐츠 */}
      <main>
        {/* 히어로 섹션 */}
        <Hero />

        {/* 기능 설명 섹션 */}
        <FeatureExplanation />

        {/* 주요 특징 섹션 */}
        <FeatureList />

        {/* 고객사 캐러셀 */}
        <CustomerCarousel />

        {/* 요금제 섹션 */}
        <PricingTable />

        {/* 콘텐츠 + 사이드바 섹션 */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
              {/* 왼쪽 콘텐츠 */}
              <ContentLeft />
              
              {/* 오른쪽 사이드바 */}
              <Sidebar onNext={handleStartUpload} />
            </div>
          </div>
        </section>

        {/* 추가 CTA 섹션 */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* 배경 장식 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                🚀 지금 바로 시작하세요!
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                AI 자동 채점의 놀라운 정확성과 효율성을 직접 경험해보세요. <br className="hidden md:block" />
                첫 10장은 완전 무료로 체험할 수 있습니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={handleStartUpload}
                  className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <span className="flex items-center justify-center">
                    무료 체험 시작
                    <svg className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105">
                  데모 영상 보기
                </button>
              </div>

              {/* 신뢰 지표 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/90">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1,247+</div>
                  <div className="text-sm">파트너 기관</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2.5M+</div>
                  <div className="text-sm">처리된 시험지</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.8%</div>
                  <div className="text-sm">정확도</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2.3초</div>
                  <div className="text-sm">평균 처리시간</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <Footer />

      {/* 스크롤 투 탑 버튼 */}
      <ScrollToTopButton />
    </div>
  );
}

// 스크롤 투 탑 버튼 컴포넌트
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="맨 위로 스크롤"
    >
      <svg className="w-6 h-6 mx-auto group-hover:-translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}