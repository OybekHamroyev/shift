import { useState } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Brand from "../brand/Brand";

const Header = () => {
    const [isOpen, setisOpen] = useState(false)
    const toggle=()=>setisOpen(!isOpen)
    return (
        <div className="header">
            <Navbar light expand="md" className="navbar">
                <Brand />
                <Collapse navbar isOpen={isOpen}>
                    <Nav navbar>
                        <NavItem>
                            <NavbarToggler id="toggler">
                                Menu
                                    <NavbarToggler className="toggler" onClick={toggle}/>
                            </NavbarToggler>
                        </NavItem>
                        <NavItem>
                            <Link to="">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="">About us</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="">Courses</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="">Gallery</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="">Contact</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            <select className="select">
                <option>English</option>
                <option>Uzbek</option>
            </select>
            <NavbarToggler className="toggler" onClick={toggle} />
            </Navbar>    
        </div>
    );
};

export default Header;