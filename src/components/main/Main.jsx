import './main.css';
import {LeftSidebar, Category, Videos} from '../';

function Main() {
  console.log(process.env.REACT_APP_PUBLIC_KEY);
  return (
    <div className='wrapper'>
      <LeftSidebar />
      <div className="main">
        <Category />
        
        <Videos />
      </div>
    </div>
  );
}

export default Main;