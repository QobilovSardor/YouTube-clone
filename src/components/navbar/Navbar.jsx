import {FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Search from "../search/Search";
import {BiVideoPlus} from 'react-icons/bi';
import {IoMdNotifications} from 'react-icons/io';
import {BiUserCircle} from 'react-icons/bi';
import './header.css';

function Main() {
  return (
    <div className="header">
      <div className="header-icons">
        <FaBars className='header-bars__icons' />
        <Link to='/'>
          <img src="../images/yt-logo.png" alt="youtube-loog" width='90px' height='20px' />
        </Link>
      </div>
      <Search />
      <div className="user-account">
        <div className='hover-icon'>
          <BiVideoPlus />
        </div>
        <div className='hover-icon notification'>
          <IoMdNotifications />
          <span className='badge'>9+</span>
        </div>
        <div>
          <BiUserCircle />
        </div>
      </div>
    </div>
  );
}

export default Main;