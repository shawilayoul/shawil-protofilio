import React from 'react'

const Social = () => {
    return (
        <div className="container grid social">
            <nav className="social_nav">
                <ul className="social_menu">
                    <li className="social_lis">
                        <a href="https://www.instagram.com" className="social_link">
                            <i class="uil uil-instagram-alt"></i>
                        </a>
                    </li>
                    <li className="social_lis">
                        <a href="https://www.twitter.com" className="social_link">
                            <i class="uil uil-twitter social_icon"></i>
                        </a>
                    </li>
                    <li className="social_lis">
                        <a href="https://www.youtube.com" className="social_link">
                            <i class="uil uil-youtube social_icon"></i>
                        </a>
                    </li>
                    <li className="social_lis">
                        <a href="https://github.com/shawilayoul/shawilayoul.git" className="social_link">
                            <i class="uil uil-github social_icon"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Social
