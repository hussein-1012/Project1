'use client';
import React, { useState } from 'react';

const SearchArticleInput = () => {
  const [searchText, setSearchText] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => 
  {
    e.preventDefault();
    console.log({ searchText });
  }

  return (
    <form onSubmit={formSubmitHandler} className='flex flex-col'>
      <label htmlFor="search" className="sr-only">Search for article</label>
      <input
        id="search"
        className='w-full p-3 rounded text-xl border-none text-gray-900'
        type="search"
        placeholder='Search for article'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}/>
    </form>
  );
};
export default SearchArticleInput;
