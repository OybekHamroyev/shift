import v from '../../img/v.svg'
import v1 from '../../img/v (1).svg'

const Background = () => {
    return (
        <div className="background">
            <img className="background-left" alt="background" src={v}/>
            <img className="background-right" alt="background" src={v1}/>
        </div>
    );
};
export default Background;