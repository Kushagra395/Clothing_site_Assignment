import React from "react";
import { ArrowDownAZ } from "lucide-react";

const SortBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 w-full md:w-64 shadow-md focus-within:ring-2 focus-within:ring-blue-600 transition-all duration-300">
      <ArrowDownAZ className="text-blue-400" size={20} />
      <select
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent w-full text-white outline-none cursor-pointer"
      >
        <option value="default" className="bg-gray-800 text-white">
          Sort by Price
        </option>
        <option value="asc" className="bg-gray-800 text-white">
          Low to High
        </option>
        <option value="desc" className="bg-gray-800 text-white">
          High to Low
        </option>
      </select>
    </div>
  );
};

export default SortBar;
