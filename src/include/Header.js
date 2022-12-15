import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div id='header'>
            <div id='name'>
                <h2><a href='/'>Portfolio</a></h2>
            </div>
            <div id='list'>
                <ul>
                    <li><span></span><a href='/'>ABOUT ME</a></li>
                    <li><span></span><a href='/skills'>SKILLS</a></li>
                    <li><span></span><a href='/project'>PROJECT</a></li>
                    <li><span></span><a href='/career'>CAREER</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;