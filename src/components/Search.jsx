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

  const handleChange = () => {
    if (!searchRef.current.value) {
      setSearchedUser(null);
      setIsSearchActive(false);
    }
  };

  const handleSearchSubmit = async e => {
    e.preventDefault();
    if (!searchRef.current.value) {
      return;
    }
    const q = query(
      collection(db, 'users'),
      where('email', '==', searchRef.current.value.toLowerCase())
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        setSearchedUser(doc.data());
      });
      setIsSearchActive(true);
    } catch {
      // console.log('nope');
      // searchRef.current.value = '';
      // setError("Couldn't find a user by this name");
    }
  };

  return (
    <div className='search'>
      <form className='search-form' onSubmit={handleSearchSubmit}>
        <input
          className='search-input'
          type='text'
          placeholder='Start a new conversation'
          ref={searchRef}
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
