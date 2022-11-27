import React from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';

const Home = () => {
    return (
        <section className="home section">
            <div className="home_container container grid">
                <div className="home_content">
                    <Social />
                    <div className="home_img"></div>
                    <Data />
                </div>
            </div>
        </section>

    )
}

export default Home
