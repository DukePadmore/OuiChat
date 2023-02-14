const Search = () => {
  return (
    <div className='search'>
      <input
        className='search-input'
        type='text'
        placeholder='Rechercher ou démarrer une nouvelle discussion'
      />
      <div>+</div>
    </div>
  );
};

export default Search;
