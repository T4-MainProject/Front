import React from 'react';

const links = ['서비스 소개', '공지사항', '사용자 게시판', '서비스 문의'];

export default function NavBar() {
  return (
    <nav className="bg-white">
      <div className="container mx-auto flex space-x-8 py-4 px-4 text-gray-600">
        {links.map(link => (
          <a
            key={link}
            href="#"
            className="pb-2 border-b-2 border-transparent hover:border-primary hover:text-gray-800 transition"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
