import { useEffect, useState } from "react";
import axios from "axios";
const Courses = () => {
    const [courses, setcourses] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/courses').then(res=>setcourses(res.data))
    }, []);
    return (
        <div className="courses">
            <h4 className="courses__title titlePrm">Courses</h4>
            <div className="courses__content">
                {courses.map(({img, title, description})=>
                <div className="courses__content__item">
                    <img className="courses__content__item__img" src={img} />
                    <p className="courses__content__item__title">{title}</p>
                    <p className="courses__content__item__description">{description}</p>
                </div>
                )}                
            </div>
        </div>
    );
};

export default Courses;