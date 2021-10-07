import Brand from "../brand/Brand";
import { Telegram, Facebook, Instagram, YouTube} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Footer = () => {
    const [footers, setfooters] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/footer').then(res=>setfooters(res.data))
    }, []);
    const date = new Date();
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content__about">
                    <Brand/>
                    <p className="footer__content__about__address">Mega Market copmlex, 5-district, Bukhara city</p>
                    <p className="footer__content__about__phone">+998 94 124 00 41</p>
                </div>
                <div className="footer__content-right">
                    <ol className="footer__content-right__services">
                        <p className="footer__content-right__services__title">Services</p>
                        <li>Frontend</li>
                        <li>Database</li>
                        <li>Backend</li>
                        <li>Practice</li>
                    </ol>
                    <ol className="footer__content-right__categories">
                        <p className="footer__content-right__categories__title">Categories</p>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Courses</li>
                        <li>Gallery</li>
                    </ol>
                    <div className="footer__content-right__follow">
                        <p className="footer__content-right__follow__title">Follow us</p>
                        <ol className="footer__content-right__follow__item">
                            <Link><Telegram/></Link>
                            <Link><YouTube/></Link>
                            <Link><Facebook/></Link>
                            <Link><Instagram/></Link>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p className="footer__bottom__text">© {date.getFullYear()}. ShiftAcademy. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;