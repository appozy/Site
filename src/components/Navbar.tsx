import React from 'react';
import { Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6" />
          <span className="text-xl font-bold">EcoFuturo</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-green-200 transition">Início</a>
          <a href="#sobre" className="hover:text-green-200 transition">Sobre</a>
          <a href="#acoes" className="hover:text-green-200 transition">Ações</a>
          <a href="#contato" className="hover:text-green-200 transition">Contato</a>
        </div>
      </div>
    </nav>
  );
}