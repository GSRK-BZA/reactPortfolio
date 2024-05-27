import React, { useEffect } from 'react';

function Nav() {
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.container');
            nav.classList.toggle('nav-scrolled', window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='container'>
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