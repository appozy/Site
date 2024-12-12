import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '../ui/ContactForm';
import { SocialShare } from '../ui/SocialShare';

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16" id="contato">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Entre em Contato
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <span>secretaria.semmas@blumenau.sc.gov.br</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <span>(91) 3284-9178</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>Blumenau, SC - Brasil</span>
                </div>
              </div>
              <SocialShare />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}