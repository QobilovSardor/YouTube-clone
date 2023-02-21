import {BsSearch} from 'react-icons/bs';
import {MdKeyboardVoice} from 'react-icons/md';
import './search.css';

function Search() {
  return (
    <div className='header-search'>
      <div className="input-group">
        <input type="text" placeholder='Search' />
        <div className='search-icon'>
          <BsSearch />
        </div>
      </div>
        <div className='search-voice tooltip'>
          <MdKeyboardVoice />
          <div></div>
          <p className='tooltiptext'>Search with your voice</p>
        </div>
    </div>
  );
}

export default Search;