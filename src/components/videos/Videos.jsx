import React from 'react';
import VideoCards from '../video-cards/VideoCards';
import './videos.css'

function Videos({videos = []}) {
  return (
    <div className='videos'>
      {videos.map(item => (
        <React.StrictMode key={item.id.videoId}>
          {item.id.videoId && <VideoCards video={item} />}
        </React.StrictMode>
      ))}
    </div>
  )
}

export default Videos