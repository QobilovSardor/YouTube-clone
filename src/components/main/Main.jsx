import './main.css';
import {LeftSidebar, Category, Videos, SearchBar} from '../';
import { useEffect, useState } from 'react';
import { Apiservice } from '../../services/api-services';

function Main() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [videos, setVideos] = useState([]);
  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Apiservice.fetching(`search?part=snippet&q=${selectedCategory}`)
        setVideos(data.data.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [selectedCategory])

  return (
    <div className='wrapper'>
      <LeftSidebar />
      <div className="main">
        <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory}/>
        <Videos videos={videos} />
        <SearchBar selectedCategoryHandler={selectedCategoryHandler}/>
      </div>
    </div>
  );
}

export default Main;