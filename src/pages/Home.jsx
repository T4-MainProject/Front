// src/pages/Home.jsx
import React from 'react';
// CSS 파일을 import (예: import '../App.css'; 또는 Tailwind CSS 등 사용 시 별도 설정)
// 이 JSX는 이전에 제공된 CSS 코드와 함께 작동하도록 설계되었습니다.

function LangCheckHome({ onNext }) {
  return (
    <div className="min-h-screen bg-pink-100"> {/* body의 배경색과 유사 */}
      {/* 1. 회원가입/로그인 부분을 위한 최상단 바 */}
      <div className="top-bar">
        <div className="user-menu"> {/* top-bar 내의 user-menu 클래스 사용 */}
          <a href="#">회원가입</a>
          <a href="#">로그인</a>
        </div>
      </div>

      {/* 2. Lang_Check 타이틀과 로고를 위한 헤더 */}
      <header> {/* CSS의 header 스타일 적용 */}
        <div className="logo-left">
          {/* 로고 이미지가 있다면 여기에 img 태그를 넣으세요. */}
          {/* <img src="/logo.png" alt="LangCheck Logo" /> */}
        </div>
        <h1 className="title">Lang_Check</h1> {/* CSS의 title 스타일 적용 */}
      </header>

      {/* 3. 메인 네비게이션 */}
      <nav> {/* CSS의 nav 스타일 적용 */}
        <a href="#">서비스 소개</a>
        <a href="#">공지사항</a>
        <a href="#">사용자 게시판</a>
        <a href="#">서비스 문의</a>
      </nav>

      {/* 4. 메인 콘텐츠 영역 */}
      <main className="main"> {/* CSS의 main 스타일 적용 */}
        <section className="content-left"> {/* CSS의 content-left 스타일 적용 */}
          <h2 className="font-semibold mb-2">서비스 업데이트 및 공지사항</h2> {/* 기존 텍스트 유지 */}
          <p className="text-sm text-gray-600">업데이트 내용 표시</p> {/* 기존 텍스트 유지 */}
          {/* CSS의 input-group, input-box, notice, input-box-large를 활용한 예시 */}
          <div className="input-group">
            <div className="input-box"></div>
            <div className="input-box"></div>
          </div>
          <div className="input-group">
            <div className="input-box"></div>
            <div className="input-box"></div>
          </div>
          <div className="notice">서비스 업데이트 및 공지사항</div>
          <div className="input-box-large"></div>
          <div className="input-box-large"></div>
        </section>

        <aside className="sidebar"> {/* CSS의 sidebar 스타일 적용 */}
          <button onClick={onNext} className="check-btn"> {/* CSS의 check-btn 스타일 적용 */}
            내시험지 채점하기
          </button>
          
          {/* Start, Upload, Results를 위한 action-box */}
          <div className="action-box"> {/* CSS의 action-box 스타일 적용 */}
            <strong className="action-title">Start</strong> {/* CSS의 action-title 스타일 적용 */}
            {/* 이미지 대신 플레이스홀더를 사용하거나 실제 이미지 경로를 넣으세요. */}
            {/* <img src="/start.png" alt="Start" className="action-image" /> */}
          </div>

          <div className="action-box"> {/* CSS의 action-box 스타일 적용 */}
            <strong className="action-title">Upload</strong> {/* CSS의 action-title 스타일 적용 */}
            {/* <img src="/upload.png" alt="Upload" className="action-image" /> */}
            <div className="action-label">Results</div> {/* CSS의 action-label 스타일 적용 */}
          </div>
        </aside>
      </main>
    </div>
  );
}

export default LangCheckHome;