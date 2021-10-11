import img from '../../img/shift_logo2 1.png'
import { Link } from 'react-router-dom'
const Brand = () => {
    return (
        <Link to="/" className="brand">
            <img className="brand__icon" alt="brand" src={img}/>
        </Link>
    );
};

export default Brand;