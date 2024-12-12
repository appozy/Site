import React from 'react';

interface TipCardProps {
  icon: React.ReactNode;
  title: string;
  tips: string[];
}

export function TipCard({ icon, title, tips }: TipCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="text-green-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span className="text-gray-600">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}