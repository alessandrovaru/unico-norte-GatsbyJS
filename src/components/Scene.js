import React from 'react'

import { Curtains } from "react-curtains";
import SimplePlane from './BasicPlane';


const Scene = () => {

  return (
    <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
      <SimplePlane/>      
    </Curtains>
  )
}

export default Scene