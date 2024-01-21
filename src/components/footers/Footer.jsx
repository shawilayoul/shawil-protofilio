import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer_container container">
            <div className="footer_title">
                <h3>Shawil</h3>
            </div>
            <div className="footer_subtitle">
                <ul className="footer_contents">
                    <li className="footer_link">
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li className="footer_link">
                        <a href="#projects" className="footer_link">Projects</a>
                    </li>
                    <li className="footer_link">
                        <a href="#testimony" className="footer_link">Testimonys</a>
                    </li>
                </ul>
            </div>
            <div className="footer_contact">
                <ul className="footer_list">
                    <li className="footer_items">
                        <a href="https://facebook.com " className="link"><i class="uil uil-facebook-f footer_icon"></i></a>
                    </li>
                    <li className="footer_items">
                        <a href="https://instagram.com " className="link"><i class="uil uil-instagram-alt footer_icon"></i></a>
                    </li>
                    <li className="footer_items">
                        <a href="https://twitter.com " className="link"><i class="uil uil-twitter footer_icon"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
