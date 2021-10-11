import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
const Gallery = () => {
    const { gallery, isLoading } = useSelector(state => state.main);
    return (
        <div className="gallery">
            <h4 className="titlePrm">Gallery</h4>
            <div className="gallery__content">
                {isLoading?<Spinner/>:gallery && gallery.map((img,idx)=><img className="gallery__content__img" key={idx}
                alt="gallery" src={img}/>)}
            </div>
            <button className="gallery__button buttonSml">see more</button>
        </div>
    );
};

export default Gallery;