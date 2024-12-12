import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-50 py-16" id="contato">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Entre em Contato
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <span>contato@ecofuturo.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}