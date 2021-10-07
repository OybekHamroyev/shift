import Header from "../components/header/Header";
import { BrowserRouter as Router } from 'react-router-dom'
import Starter from "../components/starter/Starter";
import About from "../components/about/About";
import Whyus from "../components/whyus/Whyus";
import Courses from "../components/courses/Courses";
import Gallery from "../components/gallery/Gallery";
import Ourteam from "../components/ourteam/Ourteam";
import Footer from "../components/footer/Footer";
import Background from "../components/background/Background";

const Main = () => {
    return (
        <div>
        <Router>
            <Background/>
            <Header/>
            <Starter/>
            <About/>
            <Whyus/>
            <Courses/>
            <Gallery/>
            <Ourteam/>
            <Footer/>
        </Router>
        </div>
    );
};

export default Main;