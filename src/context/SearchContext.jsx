import React, { useState, useContext } from 'react';

const SearchContext = React.createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchedUser, setSearchedUser] = useState('');
  const [isSearchActive, setIsSearchActive] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const value = {
    searchedUser,
    setSearchedUser,
    isSearchActive,
    setIsSearchActive,
    searchInput,
    setSearchInput,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
