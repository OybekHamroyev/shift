import { useState, useEffect } from 'react';
import axios from 'axios'
const Gallery = () => {
    const [gallery, setgallery] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/gallery').then(res=>setgallery(res.data))
    }, []);
    return (
        gallery?<div className="gallery">
            <h4 className="titlePrm">Gallery</h4>
            <div className="gallery__content">
                {gallery?gallery.map(img=><img className="gallery__content__img" src={img}/>):"loading..."}
            </div>
            <button className="gallery__button buttonSml">see more</button>
        </div>:"Loading"
    );
};

export default Gallery;