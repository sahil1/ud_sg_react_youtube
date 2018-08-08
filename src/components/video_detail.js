import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return (
      <div>
        <div>Video Loading...</div>
        <div>If running on remote server or Git Pages Allow-Control-Allow-Origin: *</div>
        <div>Enable CORS plugin for site to load</div>
      </div>
    );
  }
  const videoId = video.id.videoId;
  //const url = 'https://www.youtube.com/embed/' + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="{url}" className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.descrption}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
