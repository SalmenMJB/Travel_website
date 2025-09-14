import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;