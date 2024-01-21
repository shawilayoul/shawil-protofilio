import React from 'react';
import "./about.css"
import CV from "../../assests/cv.pdf";
const About = () => {
    return (
        <div className="secttion">
            < div className="about_container container" >
                <h1 className="about_title">ABOUT ME</h1>
                <div className="about_content">
                    <div className="about_img"></div>
                    <p className="about_description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Molestiae quibusdam voluptatum, tempora assumenda quasi exercitationem, <br />
                        consequatur similique veniam alias reiciendis dolor minus quae facilis ipsum, beatae sapiente reprehenderit.br <br />
                        Itaque, aspernatur.
                    </p>
                </div>
                <div className="about_cv">
                    <a download='' href={CV} className="button .button_flex cv">Download CV <i class="uil uil-file-info-alt"></i></a>
                </div>
            </div >
        </div>
    )
}

export default About
