// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/* 1) AOS 스타일 import */
import 'aos/dist/aos.css'
/* 2) AOS 스크립트 import & init */
import AOS from 'aos'
AOS.init({
  once: true,      // 한 번만 애니메이션 실행
  duration: 800,   // 애니메이션 동작 시간(ms)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
