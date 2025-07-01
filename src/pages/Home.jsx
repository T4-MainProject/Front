import React from 'react';
import TopBar from '../components/TopBar';
import AppHeader from '../components/AppHeader';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ContentLeft from '../components/ContentLeft';
import Sidebar from '../components/Sidebar';

export default function Home({ onNext }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <AppHeader />
      <NavBar />
      <Hero />
      <main className="container mx-auto flex flex-col md:flex-row gap-6 py-12 px-4">
        <ContentLeft />
        <Sidebar onNext={onNext} />
      </main>
    </div>
  );
}
