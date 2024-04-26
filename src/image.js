import React from 'react';

const Image = ({data}) => {
    const {url, name} = data;
  return (
    <div style={{width: "200px", height: "200px", border: "1px solid black", margin: "5px"}}>
        <img src={url} style={{width: "100px", height: "100px"}}/>
        <p>{name}</p>
    </div>
  )
}

export default Image