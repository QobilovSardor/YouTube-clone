import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Apiservice } from "../../services/api-services";
import ReactPlayer from "react-player";
import './video-detail.css';
import {AiFillLike} from 'react-icons/ai';

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const {id} = useParams();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Apiservice.fetching(`videos?part,snippet,statistics&id=${id}`)
        setVideoDetail(data.data.items[0])
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id])

  console.log(videoDetail);
  return (
    <div className="video-datail__wrapper">
      <div className='video-detail__left-sidebar'>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        playing={true} // avtomatik ravishda oynaydi
        volume={0.5} // ovozli qurilma miqdori 0.5
        controls={true} // oynatuvchini boshqarish elementlarini ko'rsatadi
        width={903} // oynatuvchi kengligi 903 piksel
        height={508} // oynatuvchi balandligi 508 piksel
      />
      <p className='video-title'>{videoDetail?.snippet?.title}</p>
      <div className="d-flex video-data">
        <div className='d-flex'>
          <img src={videoDetail?.snippet?.thumbnails.medium.url} alt="account-img" className='account-image' />
          <h3>{videoDetail?.snippet?.channelTitle}</h3>
        </div>
        <div className='d-flex like-box'>
          <AiFillLike />
          <span>{videoDetail?.statistics?.likeCount.slice(0, 3)}K</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default VideoDetail;