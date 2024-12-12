import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { NavLink } from '../ui/NavLink';
import { SearchBar } from '../ui/SearchBar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#inicio", label: "Início" },
    { href: "#dicas", label: "Dicas Práticas" },
    { href: "#reciclagem", label: "Reciclagem" },
    { href: "#clima", label: "Clima" },
    { href: "#iniciativas", label: "Iniciativas" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav className="bg-green-700 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6" />
            <span className="text-xl font-bold">EcoConsciência</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <SearchBar />
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <SearchBar />
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} mobile>{item.label}</NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}