import Conversation from './Conversation';
import ConvoSearch from './ConvoSearch';
import { useSearch } from '../context/SearchContext';

const Convos = () => {
  const { searchedUser, isSearchActive } = useSearch();
  return (
    <div className='convos'>
      {isSearchActive && searchedUser ? (
        <ConvoSearch {...searchedUser} />
      ) : (
        <>
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </>
      )}
      <p className='convos-end'>Start a new conversation !</p>
    </div>
  );
};

export default Convos;
