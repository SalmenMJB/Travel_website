import React, {useState, useEffect} from 'react';
import Button from './Button';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { PiAirplaneInFlightFill } from "react-icons/pi";

const Navbar = () => {
    // state of the menu icon
    const [click, setClick] = useState(false);
    // button
    const [button, setButton] = useState(true);

    // function close the mobile menu for mobile devices
    const closeMobileMenu = () => setClick(false); 

    // function to add/remove the button depending on the screen size
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    useEffect(()=>{
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (<>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">SALMEN<PiAirplaneInFlightFill id="icon" onClick={closeMobileMenu}/></Link>
                <div className="menu-icon">
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={()=>setClick(!click)} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item"><Link to="/" onClick={closeMobileMenu} className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/services" onClick={closeMobileMenu} className="nav-link">Services</Link></li>
                    <li className="nav-item"><Link to="/products" onClick={closeMobileMenu} className="nav-link">Products</Link></li>
                    <li className="nav-item"><Link to="/sign-up" onClick={closeMobileMenu} className="nav-link-mobile">Sign Up </Link></li>
                </ul>
                {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
            </div>
        </nav>
    </>);
}

export default Navbar;