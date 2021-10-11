import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";
const Courses = () => {
    const { courses, isLoading } = useSelector(state => state.main);
    return (
        <div className="courses">
            <h4 className="courses__title titlePrm">Courses</h4>
            <div className="courses__content">
                {isLoading?<Spinner/>:courses && courses.map(({img, title, description}, idx)=>
                <div className="courses__content__item" key={idx}>
                    <img className="courses__content__item__img" alt="courses" src={img} />
                    <p className="courses__content__item__title">{title}</p>
                    <p className="courses__content__item__description">{description}</p>
                </div>
                )}                
            </div>
        </div>
    );
};

export default Courses;