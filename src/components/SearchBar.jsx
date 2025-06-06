import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ placeholder = "Search...", value, onChange }) => {
  return (
    <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg flex-grow sm:flex-grow-0 w-full sm:w-auto">
      <Search size={16} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="ml-2 bg-transparent outline-none text-sm text-gray-800 w-full"
      />
    </div>
  );
};

export default SearchBar;
