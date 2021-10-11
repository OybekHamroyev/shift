import Header from "../components/header/Header";
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
            <Background/>
            <Header/>
            <Starter/>
            <About/>
            <Whyus/>
            <Courses/>
            <Gallery/>
            <Ourteam/>
            <Footer/>
        </div>
    );
};

export default Main;