import React from 'react'

const Shimmerui = () => {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
        {Array(50).fill(0).map((i)=> <div key={i} style={{margin: "5px",width: "200px", height: "200px", backgroundColor: "lightgray"}}></div>)}
    </div>
  )
}

export default Shimmerui