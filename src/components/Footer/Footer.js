import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center  footer">
            <div>
                <h2 className='footer-heading'>MyBlogs &copy; 2021</h2>
            </div>
            <div className='social-icons'>
                <a className='px-2' rel='noreferrer' target="_blank" href="https://www.facebook.com/nurulhuda.munna/"><i class="fab fa-facebook"></i></a>
                <a className='px-2' rel='noreferrer' target="_blank" href="https://twitter.com/NHMunna15"><i class="fab fa-twitter"></i></a>
                <a className='px-2' rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/nurul-huda-munna/"><i class="fab fa-linkedin-in"></i></a>
                <a className='px-2' rel='noreferrer' target="_blank" href="https://github.com/nhmunna"><i class="fab fa-github"></i></a>
            </div>
        </div>
    );
};

export default Footer;