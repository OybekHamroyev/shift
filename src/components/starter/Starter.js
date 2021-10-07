import { useState, useEffect } from "react";
const Starter = () => {
    const [starters, setstarters] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/starter").then(res=>res.json()).then(data=>{setstarters(data)})
      }, []);
    return (
        <>{(starters)?
        <div className="starter">
            <div className="starter__info">
                {starters.map(starter=>starter.icons && 
                starter.icons.map(({classname,src, idx})=><img key={idx} className={`starter__info__${classname}`} src={src}/>))}
                <h1 className="starter__info__title titleScn">{starters.map(starter=>{return starter.title})}</h1>
                <p className="starter__info__description">{starters.map(starter=>{return starter.description})}</p>
                <button className="buttonBlue">Register Now</button>
            </div>
            {starters.map(({img, idx})=>img && <img key={idx} className="starter__img"  src={img}/>)}
        </div>:"loading.."}
        </>
    );
};

export default Starter;