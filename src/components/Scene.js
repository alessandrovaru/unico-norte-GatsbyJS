import React from 'react'

import { Curtains } from "react-curtains";
import SimplePlane from './BasicPlane';


const Scene = ({image}) => {

  return (
    <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
      <SimplePlane image={image}/>      
    </Curtains>
  )
}

export default Scene