import moment from "moment";
import { Link } from "react-router-dom";
import './video-cards.css'
function VideoCards({video}) {
  return (
    <Link to={`/video/${video.id.videoId}`}>
      <div className='video-card'>
          <img src={video.snippet.thumbnails.medium.url} alt="" width='100%' className='core-img' />
          <div className='d-flex'>
              <img className='account-img' src={video.snippet.thumbnails.medium.url} alt="acount-img" width='48px'/>
              <div className='content'>
                  <p className='video-title'>{video.snippet.title}</p>
                  <p className='video-data'>{video?.snippet?.channelTitle}</p>
                  <p className='video-data'>{moment(video?.snippet?.publishedAt).fromNow()}</p>
              </div>
          </div>
      </div>
    </Link>
  )
}

export default VideoCards;
