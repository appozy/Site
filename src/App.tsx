import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import PracticalTips from './components/sections/PracticalTips';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PracticalTips />
      <Contact />
      <footer className="bg-green-800 text-white py-6 text-center">
        <p>&copy; 2024 EcoConsciência. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;