import React, { useState } from 'react';
import "./header.css";
const Header = () => {
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav_log">
                    <div className="header_img"></div>
                    <a href="#logo" className="nav_logo_name"> SHAWIL AYOUL</a>
                </div>
                <div className="nav_menu show_menu nav_menu">
                    <ul className='nav_list'>
                        <li className='nav_items'>
                            <a href='#home' onClick={() => setActiveNav("#home")} className={activeNav === "#homme" ? "nav_link active_link" : "nav_link"} > Home</a>
                        </li>
                        <li className='nav_items'>
                            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav_link active_link" : "nav_link"}>About</a></li>
                        <li className='nav_items'>
                            <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav_link active_link" : "nav_link"}>
                                Skills</a></li>
                        <li className='nav_items'>
                            <a href="#portfoilio" className='nav_link'>Portfoilio</a>
                        </li>
                        <li className='nav_items'>
                            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav_link active_link" : "nav_link"}>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
