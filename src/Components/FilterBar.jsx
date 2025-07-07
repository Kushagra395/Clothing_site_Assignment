import React from "react";
import { Filter } from "lucide-react";

const FilterBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 w-full md:w-64 shadow-md focus-within:ring-2 focus-within:ring-blue-600 transition-all duration-300">
      <Filter className="text-blue-400" size={20} />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent w-full text-white outline-none cursor-pointer"
      >
        <option value="all" className="bg-gray-800 text-white">
          All Categories
        </option>
        <option value="men's clothing" className="bg-gray-800 text-white">
          Men's Clothing
        </option>
        <option value="women's clothing" className="bg-gray-800 text-white">
          Women's Clothing
        </option>
      </select>
    </div>
  );
}; 

export default FilterBar;
