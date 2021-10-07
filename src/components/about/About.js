import { useEffect, useState } from "react";
const About = () => {
    const [abouts, setabouts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/about').then(res=>res.json()).then(data=>setabouts(data))
    }, []);
    return (
        <div className="about">
            {abouts.map(({ src }) => src && <img className="about__img" src={src} />)}
            <div className="about__info">
                <h4 className="about__info__title titlePrm">{abouts.map(({title}) =>title)}</h4>
                <p className="about__info__description">{abouts.map(({description}) =>description)}</p>
            </div>
        </div>
    );
};

export default About;