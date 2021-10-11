import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Brand from "../brand/Brand";
import { Telegram, Facebook, Instagram, YouTube} from '@material-ui/icons';
const Footer = () => {
    const { footer } = useSelector(state => state.main);
    const date = new Date();
    return (
        <div className="footer">
            <div className="footer__content">
            {footer && footer.map(({address, phone}, idx)=>(address && phone) &&
                <div className="footer__content__about" key={idx}> 
                    <Brand/>
                    <p className="footer__content__about__address">{address}</p>
                    <p className="footer__content__about__phone">{phone}</p>
                </div>)}
                <div className="footer__content-right">
                    <ol className="footer__content-right__services">
                        <p className="footer__content-right__services__title">Services</p>
                        {footer && footer.map(({services})=>services&&services.map((service,idx)=>
                        <li><Link to="#" key={idx}>{service}</Link></li>))}
                    </ol>
                    <ol className="footer__content-right__categories">
                        <p className="footer__content-right__categories__title">Categories</p>
                        {footer && footer.map(({categories})=>categories && categories.map((category,idx)=>
                        <li><Link to="#" key={idx}>{category}</Link></li>))}
                    </ol>
                    <div className="footer__content-right__follow">
                        <p className="footer__content-right__follow__title">Follow us</p>
                        <ol className="footer__content-right__follow__item">
                            <Link to="#"><Telegram/></Link>
                            <Link to="#"><YouTube/></Link>
                            <Link to="#"><Facebook/></Link>
                            <Link to="#"><Instagram/></Link>
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