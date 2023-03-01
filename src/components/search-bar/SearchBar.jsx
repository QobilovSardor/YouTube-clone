import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Apiservice} from "../../services/api-services";
import LeftSidebar from "../left-sidebar/LeftSidebar";
import Videos from "../videos/Videos";

function SearchBar() {
  const [videos, setVideos] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Apiservice.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.data.items)
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, [id])
  return (
    <div>
      <div className='wrapper'>
      <LeftSidebar />
      <div className="main">
        {id && <Videos videos={videos} />}
      </div>
    </div>
    </div>
  );
}

export default SearchBar;