import { Button } from '@material-ui/core';
import RotateRight from '@material-ui/icons/RotateRight';
import React, { useRef } from 'react'
import Draggable from 'react-draggable';
import useStyles from './styles'

const DraggableImage = ({ src, alt, className }) => {
  const classes = useStyles();
  const imgRef = useRef(null);
  
  let rotation = 0;
  const rotateImg = () => {
    rotation += 45;
    if (rotation === 360) {
      rotation = 0;
    }
    imgRef.current.style.transform = `rotate(${rotation}deg)`;
  }
  
  return (
    <>
      <Draggable style={{ display: 'flex' }}>
        <div style={{ width: 'min-content', height: 'min-content', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            ref={imgRef}
            className={className}
            src={src}
            alt={alt}
            draggable='false'
          />
          <Button onClick={rotateImg}>
            <RotateRight />
          </Button>
        </div>
      </Draggable>
    </>
  )
};

export default DraggableImage;