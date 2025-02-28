import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProyectSection from './components/ProyectSection';

function App() {
  return (
    <div className="w-full text-white overflow-x-hidden overflow-y-auto bg-black">
      {/* <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
        <div
          className="
            absolute
            top-[-10%]
            left-[-10%]
            w-[400px]
            h-[400px]
            bg-purple-700
            opacity-40
            blur-3xl
            rounded-full
          "
        />
        <div
          className="
            absolute
            bottom-[-10%]
            right-[-10%]
            w-[400px]
            h-[400px]
            bg-purple-500
            opacity-30
            blur-3xl
            rounded-full
          "
        />
      </div> */}

      <Header />
      <HeroSection />
      <ProyectSection />
    </div>
  );
}

export default App;
