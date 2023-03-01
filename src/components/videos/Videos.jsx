import React from 'react';
import { Loader, Chanel, VideoCards } from '../index';
import './videos.css';

function Videos({videos = []}) {
  if(!videos.length) {
    <Loader />
  }
  return (
    <div className='videos'>
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCards video={item} />}
          {item.id.chanelId && <Chanel item={item}/>}
        </div>
      ))}
    </div>
  )
}

export default Videos