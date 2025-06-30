// src/pages/Uploader.jsx
import React, { useState } from 'react';

function LangCheckUploader({ onNext }) {
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">LangCheck</h1>
      <div className="bg-cyan-100 p-6 rounded shadow-md w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Uploader</h2>
        <div className="mb-4">
          <p className="font-medium">언어 선택</p>
          <div className="space-x-2 mt-2">
            <button onClick={() => setLanguage('영어')} className={`px-4 py-1 rounded ${language === '영어' ? 'bg-purple-400 text-white' : 'bg-purple-200'}`}>영어</button>
            <button onClick={() => setLanguage('국어')} className={`px-4 py-1 rounded ${language === '국어' ? 'bg-purple-400 text-white' : 'bg-purple-200'}`}>국어</button>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-medium">수준 선택</p>
          <div className="space-x-2 mt-2">
            <button onClick={() => setLevel('고1')} className={`px-4 py-1 rounded ${level === '고1' ? 'bg-purple-400 text-white' : 'bg-purple-200'}`}>고1</button>
            <button onClick={() => setLevel('고2')} className={`px-4 py-1 rounded ${level === '고2' ? 'bg-purple-400 text-white' : 'bg-purple-200'}`}>고2</button>
            <button onClick={() => setLevel('고3')} className={`px-4 py-1 rounded ${level === '고3' ? 'bg-purple-400 text-white' : 'bg-purple-200'}`}>고3</button>
          </div>
        </div>
        <button
          onClick={onNext}
          disabled={!language || !level}
          className="bg-sky-900 text-white py-2 px-8 rounded mt-4 disabled:opacity-40"
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default LangCheckUploader;
