import React from 'react';
import "./contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mz4e3t4', 'template_wto9bud', form.current, '-EzNfdVBkkap2_xNU')
        e.target.reset();
    };
    return (
        <div className="contact_container container">
            <div className="contact_titles">
                <h3 className="contact_title">Get in touch</h3>
                <h4 className="contact_subtitle">Contact Me</h4>
            </div>
            <div className="contact_contents">
                <div className="contact_items">
                    <div className="items_title">
                        <h4>Tailk to me</h4>
                    </div>
                    <div className="email_items">
                        <ul className='iteme-list'>
                            <li className='contact_link'><i class="uil uil-envelope contact_icon"></i></li>
                            <li className='contact_link'><a href="#email">Email</a>
                            </li>
                            <li className='contact_link'>  <span>aocholayoul9@gmail.com</span></li>
                            <li className='contact_link'><span>write Me <i class="uil uil-arrow-right"></i></span></li>
                        </ul>
                    </div>
                    <div className="messenger_items">
                        <ul className='iteme-list'>
                            <li className='contact_link'><i class="uil uil-facebook-messenger contact_icon"></i></li>
                            <li className='contact_link'><a href="#email">Messenger</a>
                            </li>
                            <li className='contact_link'>  <span>www.facebook.com</span></li>
                            <li className='contact_link'><span>write Me <i class="uil uil-arrow-right"></i></span></li>
                        </ul>
                    </div>
                    <div className="whatsup_items">
                        <ul className='iteme-list'>
                            <li className='contact_link'><i class="uil uil-whatsapp contact_icon"></i></li>
                            <li className='contact_link'><a href="#whatsup">Whatsup</a>
                            </li>
                            <li className='contact_link'>  <span>+33782371177</span></li>
                            <li className='contact_link'><span>write Me <i class="uil uil-arrow-right"></i></span></li>
                        </ul>
                    </div>
                </div>
                <div className="contacts_writing">
                    <div className="writing_title">
                        <h3>write me  a message</h3>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="name" placeholder='Enter your name' />
                        <label>Email</label>
                        <input type="email" name="email" placeholder='Enter your E-mail' />
                        <label>Message</label>
                        <textarea name="project" placeholder='Write your message here' />
                        <button className='button button-flex'> Send a message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
