import { useRef, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import SearchIcon from '../assets/images/search.svg';
import { db } from '../utils/firebase-config';
import { useSearch } from '../context/SearchContext';

const Search = () => {
  const { currentUser } = useAuth();
  const {
    searchedUser,
    setSearchedUser,
    setIsSearchActive,
    searchInput,
    setSearchInput,
  } = useSearch();
  const searchRef = useRef();
  const [error, setError] = useState('');

  // const handleChange = () => {
  //   if (!searchRef.current.value) {
  //     setSearchedUser(null);
  //     setIsSearchActive(false);
  //   }
  // };
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
        {error && <p>{error}</p>}
        <button className='search-button'>
          <img src={SearchIcon} alt='search icon' />
        </button>
      </form>
    </div>
  );
};

export default Search;
