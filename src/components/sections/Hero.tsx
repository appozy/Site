import React from 'react';
import { Newsletter } from '../ui/Newsletter';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center" id="inicio">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1623347326174-f8cbfb55d0c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Por um Futuro Sustentável</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Descubra como suas ações diárias podem fazer a diferença na preservação do nosso planeta.
          Juntos, podemos construir um mundo mais sustentável.
        </p>
        <Newsletter />
      </div>
    </div>
  );
}