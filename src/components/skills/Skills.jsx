import React from 'react';
import "./skills.css";
import Frondend from './Frondend';
import Backend from './Backend';

const Skills = () => {
    return (
        <div>
            <div className="skills_container container">
                <div className="skills_contents">
                    <h1 className='skills_title'>Skills</h1>
                    <div className="skills_subtitle">
                        <h3>My Technical Levels</h3>
                    </div>
                </div>
                <div className="skills_data">
                    <Frondend />
                    <Backend />
                </div>
            </div>
        </div>
    )
}

export default Skills
