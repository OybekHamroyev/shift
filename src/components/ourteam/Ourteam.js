import { useEffect, useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
const Ourteam = () => {
    const [ourteam, setourteam] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/ourteam').then(res=>setourteam(res.data))
    }, []);
    const handleDragStart=(e)=>e.preventDefault();
    const items = []
    ourteam.map(({ img, name, description }) =>{
        return  items.push(<div className="ourteam__content__item" onDragStart={handleDragStart}>
                    <img className="ourteam__content__item__img" src={img} />
                    <p className="ourteam__content__item__name">{name}</p>
                    <p className="ourteam__content__item__description">{description}</p>
                </div>)
            }
    )
    return (
        <div className="ourteam">
            <h4 className="ourteam__title titlePrm">Our Team</h4>
            <div className="ourteam__content">
            <AliceCarousel items={items} infinite autoPlay disableButtonsControls disableDotsControls mouseTracking        
               autoPlayInterval={2000} autoWidth />
                <button className="ourteam__content__button">^</button>
            </div>
        </div>
    );
};

export default Ourteam;