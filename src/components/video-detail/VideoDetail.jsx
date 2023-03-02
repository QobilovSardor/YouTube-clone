/* eslint-disable react/jsx-pascal-case */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Apiservice } from "../../services/api-services";
import ReactPlayer from "react-player"; 
import './video-detail.css';
import {AiFillLike} from 'react-icons/ai';
import {AiFillDislike} from 'react-icons/ai'
import Numeric_label from "react-pretty-numbers";
import Linkify from 'react-linkify';
import Videos from "../videos/Videos";

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedToVideo, setRelatedToVideo] = useState([])
  const [videoDescription, setVideoDescription] = useState(false);
  const {id} = useParams();

  function descr() {
    setVideoDescription(!videoDescription)
  }
  
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Apiservice.fetching(`videos?part,snippet,statistics&id=${id}`)
        setVideoDetail(data.data.items[0])
        const relatedData = await Apiservice.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        setRelatedToVideo(relatedData.data.items);
        console.log(relatedData.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id])

  console.log(videoDetail);

  if (!videoDetail?.snippet) return <h2 style={{color: 'white'}}>Loading...</h2>

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
        <Link to={`chanel/${videoDetail?.snippet.channelId}`}>
          <div className='d-flex'>
            <img src={videoDetail?.snippet?.thumbnails.medium.url} alt="account-img" className='account-image' />
            <h3>{videoDetail?.snippet?.channelTitle}</h3>
          </div>
        </Link>
        <div className='d-flex like-box'>
          <AiFillLike />
          <span></span>
          <span>
            <Numeric_label params={{ commafy:true, shortFormat: true, justification: 'L'}}>{videoDetail?.statistics?.likeCount}</Numeric_label>
          </span>
          |
          <AiFillDislike />
        </div>
      </div>
      <div className="video-description" onClick={descr}>
        <p  className='foo'>
          <Linkify>
          {videoDescription ? videoDetail?.snippet?.localized?.description : videoDetail?.snippet?.localized?.description.slice(0,200)+'...'}
          </Linkify>
        </p>
      </div>
      <div className="video-statistics d-flex">
        <h3 className="video-coments">
          <Numeric_label params={{ commafy:true, shortFormat: true, justification: 'L'}}>
            {videoDetail?.statistics?.commentCount ? videoDetail?.statistics?.commentCount : null}
          </Numeric_label> Comment count
        </h3>
        <h3 className="video-coments">
          <Numeric_label params={{ commafy:true, shortFormat: true, justification: 'L'}}>
            {videoDetail?.statistics?.viewCount ? videoDetail?.statistics?.viewCount : null}
          </Numeric_label> View count
        </h3>
      </div>
      </div>
      <Videos videos={relatedToVideo}/>
    </div>
  );
}

export default VideoDetail;