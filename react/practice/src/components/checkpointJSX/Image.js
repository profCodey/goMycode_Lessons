import React from 'react'


function Image(props) {
  return (
      <div>
        <img src={props.image} alt="random" />
    </div>
  )
}

export default Image