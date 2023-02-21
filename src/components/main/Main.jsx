import './main.css';
import {LeftSidebar, Category, Videos} from '../';
import { useEffect, useState } from 'react';
import { Apiservice } from '../../services/api-services';

function Main() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Apiservice.fetching(`search?part=snippet&q=New`)
        setVideos(data.data.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])

  return (
    <div className='wrapper'>
      <LeftSidebar />
      <div className="main">
        <Category />
        <Videos videos={videos} />
      </div>
    </div>
  );
}

export default Main;