import React from 'react';
import './Footer.css';
import Button from './Button';
import {Link} from 'react-router-dom';
import { PiAirplaneInFlightFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join now the newsletter to receive our best deals and packages
            </p>
            <p className="footer-subscription-text">
                You can cancel your subscription at anytime.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                    <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--medium">Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/Services'>How it works</Link>
                    <Link to='/Services'>Testimonials</Link>
                    <Link to='/Services'>Careers</Link>
                    <Link to='/Services'>Investors</Link>
                    <Link to='/Services'>Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/Services'>Contact</Link>
                    <Link to='/Services'>Support</Link>
                    <Link to='/Services'>Destinations</Link>
                    <Link to='/Services'>Sponsorship</Link>
                 </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Videos</h2>
                    <Link to='/Services'>Submit Video</Link>
                    <Link to='/Services'>Ambassadors</Link>
                    <Link to='/Services'>Agency</Link>
                    <Link to='/Services'>Influencer</Link>
                </div> 
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to='/Services'>Instagram</Link>
                    <Link to='/Services'>Facebook</Link>
                    <Link to='/Services'>Youtube</Link>
                    <Link to='/Services'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                    SALMEN <PiAirplaneInFlightFill id="icon"/></Link>
                </div>
                <small className="website-rights">SALMEN &copy; 2025</small>
                <div className="social-icons">
                    <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Facebook'>
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Facebook'>
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='Facebook'>
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Facebook'>
                        <i className="fab fa-youtube"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}
