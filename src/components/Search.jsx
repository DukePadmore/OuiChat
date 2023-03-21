import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import SearchIcon from '../assets/images/search.svg';
import { db } from '../utils/firebase-config';
import { useSearch } from '../context/SearchContext';
import { useAuth } from '../context/AuthContext';

const Search = () => {
  const { currentUser } = useAuth();
  const { setSearchedUser, setIsSearchActive, searchInput, setSearchInput } =
    useSearch();

  const handleChange = e => {
    if (!e.target.value) {
      setSearchedUser(null);
      setIsSearchActive(false);
    }
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = async e => {
    e.preventDefault();
    if (!searchInput) {
      return;
    }
    if (searchInput.toLowerCase() === currentUser.email) {
      setSearchInput('');
      return;
    }
    const q = query(
      collection(db, 'users'),
      where('email', '==', searchInput.toLowerCase())
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        setSearchedUser(doc.data());
      });
      setIsSearchActive(true);
    } catch {}
  };

  return (
    <div className='search'>
      <form className='search-form' onSubmit={handleSearchSubmit}>
        <input
          className='search-input'
          type='text'
          placeholder='Start a new conversation'
          value={searchInput}
          onChange={handleChange}
        />
        <button className='search-button'>
          <img src={SearchIcon} alt='search icon' />
        </button>
      </form>
    </div>
  );
};

export default Search;
