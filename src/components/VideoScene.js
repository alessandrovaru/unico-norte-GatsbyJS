import React from 'react'

import { Curtains } from "react-curtains";
import VideoPlane from './VideoPlane';


const VideoScene = () => {

  return (
    <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
      <VideoPlane/>      
    </Curtains>
  )
}

export default VideoScene