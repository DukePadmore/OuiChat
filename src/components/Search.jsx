import SearchIcon from '../assets/images/search.svg';

const Search = () => {
  return (
    <div className='search'>
      <form className='search-form'>
        <input
          className='search-input'
          type='text'
          placeholder='Rechercher ou démarrer une nouvelle discussion'
        />
        <button className='search-button'>
          <img src={SearchIcon} alt='search icon' />
        </button>
      </form>
      <div>+</div>
    </div>
  );
};

export default Search;
