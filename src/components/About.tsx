import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Sustentabilidade"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Por que Sustentabilidade Importa?
            </h2>
            <p className="text-gray-600 mb-4">
              A sustentabilidade é mais do que uma tendência – é uma necessidade urgente para 
              preservar nosso planeta para as futuras gerações. Cada pequena ação conta na 
              construção de um mundo mais sustentável.
            </p>
            <p className="text-gray-600 mb-6">
              Nosso compromisso é educar e inspirar pessoas a fazerem escolhas mais conscientes
              em seu dia a dia, promovendo práticas sustentáveis que beneficiam tanto o meio 
              ambiente quanto nossa qualidade de vida.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition">
              Participe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}