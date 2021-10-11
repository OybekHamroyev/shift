import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";
const Whyus = () => {
    const { whyus, isLoading } = useSelector(state => state.main);
    return (
        <div className="whyus">
            <h4 className="whyus__title titlePrm">Why us?</h4>
            <div className="whyus__content">
                {isLoading?<Spinner/>:whyus&&whyus.map(({ img, title, description },idx) =>
                    <div className="whyus__content__item" key={idx}>
                        <img className="whyus__content__item__img" src={img} alt="whyus"/>
                        <p className="whyus__content__item__title">{title}</p>
                        <p className="whyus__content__item__description">{description}</p>
                    </div>
                )
                }
            </div>
        </div>
    )
}
export default Whyus;