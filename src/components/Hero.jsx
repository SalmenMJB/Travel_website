import React from 'react';
import Button from './Button';
import '../App.css';
import './Hero.css'; 

const Hero = () => {
    return (
        <section className="hero-container">
            <video src="/videos/video-2.2.mp4" autoPlay loop muted />
            <h1>ADVENTURES ARE WAITING</h1>
            <p>Don't hesitate, book with us!</p>
            <div className="hero-btns">
                <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER <i className="far fa-play-circle" /></Button>
            </div>
        </section>
    );
}


export default Hero;