import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full md:w-64 px-4 py-1 pl-10 text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
    </div>
  );
}