import React, { useEffect, useState } from 'react';
import './header.scss';

const Header = () => {
    const [color, setColor] = useState("");

    window.onload = function() {

        const red = document.querySelector('.red');
        red.addEventListener('click', () => {
            red.classList.toggle('redd');
        })
    }

    return (
        <div id='header'>
            <div id='name'>
                <h2><a href='/'>Portfolio</a></h2>
            </div>
            <div id='list'>
                <ul>
                    <li className='red'><span></span><a href='/'>ABOUT ME</a></li>
                    <li className='red'><span></span><a href='/skills'>SKILLS</a></li>
                    <li className='red'><span></span><a href='/project'>PROJECT</a></li>
                    <li className='red'><span></span><a href='/career'>CAREER</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;