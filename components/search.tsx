'use client'
import React, { useState } from 'react';

interface SearchInputProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput = ({ 
  onSearch = () => {}, 
  placeholder = "Search...",
  className = ""
}: SearchInputProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`flex w-full max-w-md gap-3.5 h-[5rem] ${className}`}
      role="search"
    >
      <div className="relative flex-1">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-[1rem] border text-white placeholder:text-[#c4c4c4] placeholder:!text-[1.3rem] border-[#DEE0E475] bg-[#FFFFFF12] h-[5rem] px-4 py-2 pl-4 text-base focus:border-[#DEE0E475] focus:outline-none focus:ring-2 focus:ring-[#DEE0E475]"
          aria-label="Search input"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-[#22AB0C] px-4 py-2 text-[1.5rem] leading-[2.4rem] font-medium text-white hover:bg-[#7dd56f] focus:outline-none focus:ring-2 focus:ring-[#22AB0C] focus:ring-offset-2 disabled:opacity-50"
        disabled={!query.trim()}
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;