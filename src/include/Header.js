import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div id='header'>
            <div id='name'>
                <h2><a href='#'>HyoYoung's</a></h2>
            </div>
            <div id='list'>
                <ul>
                    <li><span></span><a href='#'>ABOUT ME</a></li>
                    <li><span></span><a href='#'>SKILLS</a></li>
                    <li><span></span><a href='#'>PROJECT</a></li>
                    <li><span></span><a href='#'>CAREER</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;