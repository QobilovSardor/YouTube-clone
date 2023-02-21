function VideoCards({video}) {
  return (
    <div>
      <img src={video.snippet.thumbnails.high.url} alt="" width='100%' />
    </div>
  )
}

export default VideoCards;
