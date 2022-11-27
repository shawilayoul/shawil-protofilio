import React from 'react';
import "./header.css";
const Header = () => {
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
                            <a href='#home' className='nav_link active_link' > Home</a>
                        </li>
                        <li className='nav_items'>
                            <a href="#about" className='nav_link'>About</a></li>
                        <li className='nav_items'>
                            <a href="#skills" className='nav_link'>
                                Skills</a></li>
                        <li className='nav_items'>
                            <a href="#portfoilio" className='nav_link'>Portfoilio</a>
                        </li>
                        <li className='nav_items'>
                            <a href="#contact" className='nav_link'>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
