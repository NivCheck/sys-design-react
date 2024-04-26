import React from 'react'
import { useState, useEffect } from 'react'
import Image from './image';
import Shimmerui from './Shimmerui';

const ImagesList = () => {
  
    const [images, setImages] = useState([]);

    useEffect(()=> {
        getImages();
    }, [])

    const getImages = async () => {
        const res = await fetch('https://api.imgflip.com/get_memes');
        let json = await res.json();
        //setTimeout(()=> {
            setImages(json.data.memes);
        //}, 1000);
        
    }

  return (
    <div>
        <h2>Images List</h2>
        {images.length==0 ? <Shimmerui /> : <div style={{display: "flex", flexWrap: "wrap"}}>
            
            {images.map((img, i) => <Image key={i} data={img}/>)
        }
        </div>}
    </div>
  )
}

export default ImagesList