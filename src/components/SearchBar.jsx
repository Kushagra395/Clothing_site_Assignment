import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 shadow-lg focus-within:ring-2 focus-within:ring-sky-500">
        <Search className="text-sky-400 mr-2" size={20} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search products..."
           className="bg-transparent w-full text-white placeholder-gray-400 outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
