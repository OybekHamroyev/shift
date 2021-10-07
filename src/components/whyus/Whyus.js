import { useEffect, useState } from "react";
import axios from "axios";
const Whyus = () => {
    const [whyuss, setwhyuss] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/whyus').then(res => setwhyuss(res.data))
    }, []);
    return (
        <div className="whyus">
            <h4 className="whyus__title titlePrm">Why us?</h4>
            <div className="whyus__content">
                {whyuss.map(({ img, title, description }) =>
                    <div className="whyus__content__item">
                        <img className="whyus__content__item__img" src={img} />
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