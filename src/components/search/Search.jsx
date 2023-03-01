import {BsSearch} from 'react-icons/bs';
import {MdKeyboardVoice} from 'react-icons/md';
import './search.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  function handlerSubmit(e) {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`)
    }
  }
  return (
    <div className='header-search'>
      <div className="input-group" onSubmit={handlerSubmit} >
        <input type="text" placeholder='Search' onChange={e => setValue(e.target.value)} value={value}/>
        <div className='search-icon' type='submit' onClick={handlerSubmit} onChange={handlerSubmit}>
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