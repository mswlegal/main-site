import React from 'react';

const LazyVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      id="headerVideo"
      src="/video/header_video.mp4"
      type="video/mp4"
      loading="lazy" // Lazy load the video
    >
      <source src="/video/header_video.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default LazyVideo;
