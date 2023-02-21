import './left-sidebar.css';
import {AiFillHome} from 'react-icons/ai';
import {FaFileVideo} from 'react-icons/fa';
import {MdSubscriptions} from 'react-icons/md';
import {FaHistory} from 'react-icons/fa';
import {RiVideoFill} from 'react-icons/ri';
import {MdVideoLibrary} from 'react-icons/md';
import {MdOutlineWatchLater} from 'react-icons/md';
import {AiOutlineLike} from 'react-icons/ai'

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="box active">
        <AiFillHome />
        <span>Home</span>
      </div>
      <div className="box">
        <FaFileVideo />
        <span>Shorts</span>
      </div>
      <div className="box">
        <MdSubscriptions />
        <span>Subscription</span>
      </div>

      <hr className='line' />

      <div className="box">
        <MdVideoLibrary />
        <span>Library</span>
      </div>
      <div className="box">
        <FaHistory />
        <span>History</span>
      </div>
      <div className="box">
        <RiVideoFill />
        <span>Your videos</span>
      </div>
      <div className="box">
        <MdOutlineWatchLater />
        <span>Watch later</span>
      </div>
      <div className="box">
        <AiOutlineLike />
        <span>Like videos</span>
      </div>
    </div>
  );
}

export default LeftSidebar;