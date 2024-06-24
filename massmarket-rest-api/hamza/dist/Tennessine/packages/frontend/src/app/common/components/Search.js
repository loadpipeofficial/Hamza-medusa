// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
"use client";
import React from "react";
import Image from "next/image";
const Search = ({ setSearchPhrase, searchPhrase, }) => {
    const handleSearchChange = (e) => {
        const inputElem = e.target;
        if (!inputElem)
            return;
        setSearchPhrase(inputElem.value);
    };
    return (<div id="transaction-search">
      <form className="flex" onSubmit={(e) => {
            e.preventDefault();
        }}>
        {searchPhrase && searchPhrase.length ? (<Image src="/assets/arrow-left.svg" width={19} height={19} alt="search-icon" className="absolute m-2 mt-4 ml-3"/>) : (<Image src="/assets/search.svg" width={19} height={19} alt="search-icon" className="absolute m-2 mt-4 ml-3"/>)}
        <input className="border-2 border-solid mt-1 p-2 pl-9 w-full rounded" id="products" name="products" placeholder="Search products" value={searchPhrase} onChange={(e) => handleSearchChange(e)}/>
      </form>
    </div>);
};
export default Search;
//# sourceMappingURL=Search.js.map