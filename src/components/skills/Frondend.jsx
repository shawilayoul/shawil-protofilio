import React from 'react';

const Frondend = () => {
    return (
        <div className="frondend_container">
            <p className='frondend_title'>Frondend Skills</p>
            <div className="frondend_contents">
                <ul className='frondend_list1'>
                    <li className='frondend_items'><i class="uil uil-html5 skills-icon"></i>HTML <span className='skills_span'> Basic </span></li>
                    <li className='frondend_items'><i class="uil uil-css3-simple skills-icon"></i>CSS <span className='skills_span'>Intermidaite</span></li>
                    <li className='frondend_items'><i class="uil uil-java-script skills-icon"></i> Javascript <span className='skills_span'>Intermidiate</span></li>
                </ul>
                <ul className='frondend_list2'>
                    <li className='frondend_items'><i class="uil uil-css3-simple skills-icon"></i>Boodstr<span className='skills_span'>Basic</span></li>
                    <li className='frondend_items'><i class="uil uil-code-branch skills-icon"></i> Git <span className='skills_span'>Intermidaite</span></li>
                    <li className='frondend_items'><i class="uil uil-react skills-icon"></i>React <span className='skills_span'>Basic</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Frondend
