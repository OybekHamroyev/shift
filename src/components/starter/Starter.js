import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getMainpageDataReqStart, getMainpageDataReqSuccess } from '../../store/actions/main';
import { Spinner } from "reactstrap";
const Starter = () => {
    const {starter, isLoading} = useSelector(state => state.main);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMainpageDataReqStart());
        axios.get("http://localhost:3000/main").then(res=>dispatch(getMainpageDataReqSuccess(res.data))).catch(err=>console.error(err))
    }, []);
    return (
        <div className="starter">
            {isLoading?<Spinner className="spinner"/>:
            <div className="starter__info">
                {starter && starter.map(start=>start.icons && 
                start.icons.map(({classname, src}, idx)=><img key={idx} className={`starter__info__${classname}`} src={src} alt="icon"/>))}
                <h1 className="starter__info__title titleScn">{starter && starter.map(start=>{return start.title})}</h1>
                <p className="starter__info__description">{starter && starter.map(start=>{return start.description})}</p>
                <button className="buttonBlue">Register Now</button>
            </div>}
            {starter && starter.map(({img}, idx)=>img && <img key={idx} className="starter__img"  src={img} alt="starter"/>)}
        </div>
    );
};

export default Starter;