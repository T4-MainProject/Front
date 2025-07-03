// ============================================
// src/pages/ExamUpload.jsx - 시험지 업로드 페이지
// ============================================
// 📝 주요 기능:
// - 라디오버튼 방식의 과목/학년 선택
// - JPG/PNG 형식만 지원하는 드래그 앤 드롭 파일 업로드
// - 실시간 업로드 진행률 표시
// - 폼 데이터 유효성 검사
// - 데이터베이스 스키마(exam_uploads)와 매핑되는 필드 구조
// ============================================

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExamUpload() {
  // 🧭 React Router 네비게이션 훅
  const navigate = useNavigate();

  // 🏠 홈 페이지로 돌아가기 함수
  const handleBackToHome = () => {
    navigate('/');
  };
  // 📋 폼 데이터 상태 관리 (DB exam_uploads 테이블과 매핑)
  const [formData, setFormData] = useState({
    uploadTitle: '',    // upload_title: 사용자가 입력한 제목
    subject: '',        // subject: 과목 (ENUM으로 제한)
    examType: '',       // exam_type: 시험 유형
    examDate: '',       // exam_date: 시험 날짜
    schoolName: '',     // school_name: 학교명
    grade: ''           // grade: 학년 (추가 필드)
  });
  
  // 📎 파일 업로드 관련 상태
  const [selectedFile, setSelectedFile] = useState(null);    // 선택된 파일 객체
  const [dragActive, setDragActive] = useState(false);       // 드래그 상태 표시
  const [uploadProgress, setUploadProgress] = useState(0);   // 업로드 진행률 (0-100)
  const [isUploading, setIsUploading] = useState(false);     // 업로드 중 상태
  const fileInputRef = useRef(null);                         // 숨겨진 파일 input 참조

  // 📚 과목 옵션들 (DB 스키마의 ENUM과 일치)
  // 🔧 수정사항: 수학 과목 제거 (기존 7개 → 6개)
  const subjects = [
    { id: '국어', label: '국어', icon: '📚' },
    { id: '영어', label: '영어', icon: '🇺🇸' },
    { id: '과학', label: '과학', icon: '🔬' },
    { id: '사회', label: '사회', icon: '🌍' },
    { id: '한국사', label: '한국사', icon: '🏛️' },
    { id: '기타', label: '기타', icon: '📝' }
  ];

  // 🎓 학년 옵션들 
  // 🔧 수정사항: 고등학교 1,2,3학년 제거 (기존 6개 → 3개, 중학교만)
  const grades = [
    { id: '1학년', label: '1학년' },
    { id: '2학년', label: '2학년' },
    { id: '3학년', label: '3학년' }
  ];

  // 시험 유형 옵션들
  const examTypes = [
    '중간고사', '기말고사', '모의고사', '수능', '단원평가', '월말평가', '기타'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 📁 파일 선택 및 유효성 검사 함수
  const handleFileSelect = (files) => {
    const file = files[0];
    if (!file) return;

    // ✅ 파일 형식 체크 (JPG, PNG만 허용 - YOLO 및 OCR 처리를 위함)
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      alert('JPG, PNG 형식의 이미지만 업로드 가능합니다.');
      return;
    }

    // ✅ 파일 크기 체크 (10MB 제한 - 서버 부하 방지)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      alert('파일 크기는 10MB 이하여야 합니다.');
      return;
    }

    setSelectedFile(file);
  };

  // 🎯 드래그 앤 드롭 이벤트 처리
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);    // 드래그 중일 때 시각적 피드백
    } else if (e.type === 'dragleave') {
      setDragActive(false);   // 드래그 영역 벗어날 때
    }
  };

  // 📂 파일 드롭 이벤트 처리
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files);  // 기존 유효성 검사 로직 재사용
    }
  };

  const handleFileInputChange = (e) => {
    handleFileSelect(e.target.files);
  };

  // 🚀 폼 제출 및 업로드 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ✅ 필수 필드 유효성 검사
    if (!selectedFile) {
      alert('시험지 이미지를 선택해주세요.');
      return;
    }

    if (!formData.subject) {
      alert('과목을 선택해주세요.');
      return;
    }

    if (!formData.grade) {
      alert('학년을 선택해주세요.');
      return;
    }

    setIsUploading(true);
    
    // 📤 FormData 생성 (multipart/form-data로 서버 전송용)
    // 실제 구현에서는 여기에 API 엔드포인트로 전송하는 로직 추가
    const uploadData = new FormData();
    uploadData.append('file', selectedFile);              // 시험지 이미지 파일
    uploadData.append('uploadTitle', formData.uploadTitle);   // 사용자 제목
    uploadData.append('subject', formData.subject);           // 선택된 과목
    uploadData.append('examType', formData.examType);         // 시험 유형
    uploadData.append('examDate', formData.examDate);         // 시험 날짜
    uploadData.append('schoolName', formData.schoolName);     // 학교명
    uploadData.append('grade', formData.grade);               // 학년

    // 📊 시뮬레이션된 업로드 진행률 (실제로는 서버 응답 기반)
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    setIsUploading(false);
    alert('시험지 업로드가 완료되었습니다! AI 채점을 시작합니다.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <button 
              onClick={handleBackToHome}
              className="text-gray-600 hover:text-gray-800 mr-4 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              시험지 업로드
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 기본 정보 카드 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                기본 정보
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    업로드 제목 (선택사항)
                  </label>
                  <input
                    type="text"
                    name="uploadTitle"
                    value={formData.uploadTitle}
                    onChange={handleInputChange}
                    placeholder="예: 2024년 1학기 중간고사"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    시험 날짜 (선택사항)
                  </label>
                  <input
                    type="date"
                    name="examDate"
                    value={formData.examDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    학교명 (선택사항)
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    placeholder="예: 서울고등학교"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    시험 유형 (선택사항)
                  </label>
                  <select
                    name="examType"
                    value={formData.examType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">시험 유형 선택</option>
                    {examTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 과목 선택 카드 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</span>
                과목 선택 <span className="text-red-500 ml-1">*</span>
              </h2>
              
              {/* 🔧 수정사항: 과목 수 변경으로 그리드 조정 (7개→6개) */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {subjects.map(subject => (
                  <label 
                    key={subject.id}
                    className={`relative cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                      formData.subject === subject.id
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={subject.id}
                      checked={formData.subject === subject.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <div className="text-2xl mb-2">{subject.icon}</div>
                      <div className="text-sm font-semibold text-gray-700">{subject.label}</div>
                    </div>
                    {formData.subject === subject.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* 학년 선택 카드 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</span>
                학년 선택 <span className="text-red-500 ml-1">*</span>
              </h2>
              
              {/* 🔧 수정사항: 학년 수 변경으로 그리드 조정 (6개→3개, 중학교만) */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {grades.map(grade => (
                  <label 
                    key={grade.id}
                    className={`relative cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                      formData.grade === grade.id
                        ? 'border-green-500 bg-green-50 shadow-lg'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="grade"
                      value={grade.id}
                      checked={formData.grade === grade.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-700">{grade.label}</div>
                    </div>
                    {formData.grade === grade.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* 파일 업로드 카드 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">4</span>
                시험지 업로드 <span className="text-red-500 ml-1">*</span>
              </h2>
              
              {/* 📎 드래그 앤 드롭 파일 업로드 영역 */}
              <div 
                className={`relative border-2 border-dashed rounded-2xl p-8 transition-all duration-200 ${
                  dragActive 
                    ? 'border-blue-500 bg-blue-50'     // 드래그 중
                    : selectedFile 
                      ? 'border-green-500 bg-green-50' // 파일 선택됨
                      : 'border-gray-300 hover:border-blue-400'  // 기본 상태
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {/* 숨겨진 파일 입력 필드 (JPG/PNG만 허용) */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileInputChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                <div className="text-center">
                  {selectedFile ? (
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-green-600">파일 선택됨</p>
                        <p className="text-gray-600 mt-1">{selectedFile.name}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedFile(null)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        파일 제거
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-700">
                          시험지 이미지를 드래그하거나 클릭해서 선택하세요
                        </p>
                        <p className="text-gray-500 mt-2">
                          JPG, PNG 형식만 지원 • 최대 10MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
                      >
                        파일 선택하기
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* 업로드 진행률 */}
              {isUploading && (
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>업로드 중...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* 제출 버튼 */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isUploading}
                className={`group relative px-12 py-4 font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 ${
                  isUploading
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:scale-105'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isUploading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      업로드 중...
                    </>
                  ) : (
                    <>
                      🚀 AI 채점 시작하기
                      <svg className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
                {!isUploading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 📝 변경 사항 요약:
// ============================================
// 1. 과목 선택: 수학 제거 (7개 → 6개)
// 2. 학년 선택: 고등학교 1,2,3학년 제거 (6개 → 3개, 중학교만)
// 3. 그리드 레이아웃: 변경된 옵션 수에 맞게 조정
// 4. 파일 업로드: JPG/PNG만 허용, 드래그 앤 드롭 지원
// 5. 유효성 검사: 필수 필드(파일, 과목, 학년) 검증
// 6. DB 연동 준비: exam_uploads 테이블 스키마와 매핑
// ============================================