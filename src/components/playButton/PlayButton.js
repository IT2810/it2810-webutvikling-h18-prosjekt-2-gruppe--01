import React from 'react';

const PlayButton = ({src}) => {
  return (
    <audio controls autoPlay loop preload='auto'> 
      <source src={src}/>
      This text displays if the audio tag isn't supported.
    </audio>
  )
}

export default PlayButton;