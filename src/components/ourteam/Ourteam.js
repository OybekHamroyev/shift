import { useSelector } from "react-redux";
import AliceCarousel from "react-alice-carousel";
const Ourteam = () => {
    const { ourteam } = useSelector(state => state.main);
    const handleDragStart=(e)=>e.preventDefault();
    const items = [];
    ourteam&&ourteam.map(({ img, name, description },idx) =>{
        return  items.push(<div className="ourteam__content__item" onDragStart={handleDragStart} key={idx}>
                    <img className="ourteam__content__item__img" src={img} alt="ourteam" />
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