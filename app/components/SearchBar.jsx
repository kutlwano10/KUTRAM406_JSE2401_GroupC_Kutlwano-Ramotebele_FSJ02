"use client";

import { useState, useEffect } from "react";
import fetchData from "../api/route";

const SearchBar = ({onSearch}) => {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearch= ()=> {
    setSearchItem(onSearch)
  }

  return (
    <div className="w-80 relative top-0 mb-20 border">
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
      </label>

      <input
        value={searchItem}
        onChange={handleInputChange}
        type="text"
        id="Search"
        placeholder="Search products, brands ..."
        className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button
          onClick={handleSearch}
          type="button"
          className="text-gray-600 hover:text-gray-700"
        >
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default SearchBar;
