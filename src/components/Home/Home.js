import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Home.css'
const Home = () => {
    return (
        <div className="home-page">
            <div className="header-section">
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <div className="project-section">
                
            </div>
        </div>
    );
};

export default Home;