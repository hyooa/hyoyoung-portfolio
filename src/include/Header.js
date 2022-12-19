import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {

    function onClick(e) {
        let color = document.querySelectorAll('.red')
        color.forEach(function (re, i) {
            if (e.currentTarget === re) {
                re.classList.add('on')
            } else {
                re.classList.remove('on')
            }
        })
        // console.log(e.currentTarget);
    }

    return (
        <div id='header'>
            <div id='name'>
                <h2><a href='/'>Portfolio</a></h2>
            </div>
            <div id='list'>
                <ul>
                    <Link to='/'><input type="button" onClick={onClick} className='red' value="ABOUT ME"></input></Link>
                    <Link to='/skills'><input type="button" onClick={onClick} className='red' value="SKILLS"></input></Link>
                    <Link to='/project'><input type="button" onClick={onClick} className='red' value="PROJECT"></input></Link>
                    <Link to='/career'><input type="button" onClick={onClick} className='red' value="CAREER"></input></Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;