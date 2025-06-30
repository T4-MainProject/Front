import React, { useState } from 'react';
import LangCheckHome from './pages/Home';
import LangCheckUploader from './pages/Uploader';
import LangCheckWaiting from './pages/Waiting';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      {page === 'home' && <LangCheckHome onNext={() => setPage('uploader')} />}
      {page === 'uploader' && <LangCheckUploader onNext={() => setPage('waiting')} />}
      {page === 'waiting' && <LangCheckWaiting />}
    </>
  );
}

export default App;
