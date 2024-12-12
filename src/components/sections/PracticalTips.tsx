import React from 'react';
import { TipCard } from '../ui/TipCard';
import { Droplet, Zap, Recycle, Leaf } from 'lucide-react';

const tips = [
  {
    icon: <Droplet className="h-8 w-8" />,
    title: "Economia de Água",
    tips: [
      "Tome banhos mais curtos",
      "Feche a torneira ao escovar os dentes",
      "Reutilize água da máquina de lavar",
      "Conserte vazamentos rapidamente"
    ]
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Economia de Energia",
    tips: [
      "Use lâmpadas LED",
      "Aproveite a luz natural",
      "Desligue aparelhos em standby",
      "Evite usar ar condicionado"
    ]
  },
  {
    icon: <Recycle className="h-8 w-8" />,
    title: "Reciclagem",
    tips: [
      "Separe o lixo corretamente",
      "Compostagem de orgânicos",
      "Reutilize embalagens",
      "Doe itens não utilizados"
    ]
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Consumo Consciente",
    tips: [
      "Evite produtos descartáveis",
      "Compre produtos locais",
      "Use sacolas reutilizáveis",
      "Prefira alimentos orgânicos"
    ]
  }
];

export default function PracticalTips() {
  return (
    <section className="py-16 bg-gray-50" id="dicas">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Dicas Práticas para um Mundo Melhor
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <TipCard key={index} {...tip} />
          ))}
        </div>
      </div>
    </section>
  );
}