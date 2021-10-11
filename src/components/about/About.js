import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";
const About = () => {
    const {about, isLoading} = useSelector(state => state.main);
    return (isLoading?<Spinner/>:
        <div className="about">
            {about&&about.map(({ src }, idx) => src && <img key={idx} alt="about" className="about__img" src={src} />)}
            <div className="about__info">
                <h4 className="about__info__title titlePrm">{about&&about.map(({title}) =>title)}</h4>
                <p className="about__info__description">{about&&about.map(({description}) =>description)}</p>
            </div>
        </div>
    );
};

export default About;