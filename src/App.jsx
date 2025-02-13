import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import _ from 'lodash';

function App() {

  return (
    <main className="h-screen w-screen overflow-x-hidden overflow-y-scroll">
      <Header  />
      <HeroSection />
    </main>
  );
}

export default App;
