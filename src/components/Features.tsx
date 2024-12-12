import React from 'react';
import { Recycle, Droplets, Sun, Wind } from 'lucide-react';

const features = [
  {
    icon: <Recycle className="h-8 w-8" />,
    title: 'Reciclagem',
    description: 'Aprenda sobre a importância da reciclagem e como implementá-la no seu dia a dia.'
  },
  {
    icon: <Droplets className="h-8 w-8" />,
    title: 'Conservação da Água',
    description: 'Dicas práticas para economizar água e preservar este recurso vital.'
  },
  {
    icon: <Sun className="h-8 w-8" />,
    title: 'Energia Renovável',
    description: 'Descubra as diferentes fontes de energia limpa e seu impacto positivo.'
  },
  {
    icon: <Wind className="h-8 w-8" />,
    title: 'Qualidade do Ar',
    description: 'Ações para reduzir a poluição e melhorar a qualidade do ar.'
  }
];

export default function Features() {
  return (
    <div className="py-16 bg-gray-50" id="acoes">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nossas Ações pelo Planeta
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}