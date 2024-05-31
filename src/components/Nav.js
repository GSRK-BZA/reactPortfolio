import React from 'react';
import useScroll from './useScroll';
import { Link } from 'react-scroll';

function Nav() {
    const scrolled = useScroll();
    return (
        <div className={`container ${scrolled ? 'container-color' : ''}`}>
            <div className='Name'>My Portfolio</div>
            <div className='menu'>
                <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                    <li><Link to="testimonial" smooth={true} duration={500}>Testimonial</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
