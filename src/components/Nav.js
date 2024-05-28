import React from 'react';
import useScroll from './useScroll';


function Nav() {
    const scrolled = useScroll();
    return (
        <div className={`container ${scrolled ? 'container-color' : ''}`}>
            <div className='Name'>My Portfolio</div>
            <div className='menu'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Experience</a></li>
                    <li><a href="/contact">Testimonial</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;