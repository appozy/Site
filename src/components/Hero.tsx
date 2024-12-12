import React from 'react';
import { TreePine } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center" id="inicio">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1498925008800-019c7d59d903?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <div className="flex justify-center mb-4">
          <TreePine className="h-16 w-16" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Preserve Hoje, Viva o Amanhã</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Juntos podemos criar um futuro sustentável para as próximas gerações.
          Descubra como fazer a diferença no meio ambiente.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition">
          Saiba Mais
        </button>
      </div>
    </div>
  );
}