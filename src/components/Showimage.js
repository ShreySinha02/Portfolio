import React from 'react'
import  './Showimage.css';
function Showimage({image}) {
  return (
    <div>

      <img className='image' src={image} alt='im' width="300" height="300"></img>
    </div>
  )
}

export default Showimage;