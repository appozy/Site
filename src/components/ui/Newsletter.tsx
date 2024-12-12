import React from 'react';

export function Newsletter() {
  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Receba Nossas Novidades</h3>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
        />
        <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-r-lg transition">
          Inscrever
        </button>
      </div>
    </div>
  );
}