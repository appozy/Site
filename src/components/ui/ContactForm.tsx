import React from 'react';

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Mensagem</label>
        <textarea
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}