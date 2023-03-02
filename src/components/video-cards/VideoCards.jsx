import moment from "moment";
import { Link } from "react-router-dom";
import './video-cards.css'
function VideoCards({video}) {
  return (
    <div className='video-card'>
      <Link to={`/video/${video.id.videoId}`}>
        <img src={video.snippet.thumbnails.medium.url} alt="" width='100%' className='core-img' />
      </Link>
      <div className='d-flex'>
        <Link to={`chanel/${video?.snippet?.channelId}`}>
          <img className='account-img' src={video?.snippet?.thumbnails.medium.url} alt="acount-img" width='48px'/>
        </Link>
        <Link to={`video/${video?.id?.videoId}`}>
          <div className='content'>
            <p className='video-title'>{video?.snippet?.title}</p>
            <p className='video-data'>{video?.snippet?.channelTitle}</p>
            <p className='video-data'>{moment(video?.snippet?.publishedAt).fromNow()}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default VideoCards;
