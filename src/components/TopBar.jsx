import React from 'react';

export default function TopBar() {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex justify-end py-2 px-4 space-x-6 text-sm text-gray-600">
        <a href="#" className="hover:text-primary">회원가입</a>
        <a href="#" className="hover:text-primary">로그인</a>
      </div>
    </div>
  );
}
