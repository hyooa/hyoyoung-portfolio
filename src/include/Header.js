import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {

    function popUp(){
        document.querySelector('.last').classList.toggle('popup');
    }

    function onClick(e) {
        const color = document.querySelectorAll('.red')
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
            <div id='toggle'>
                <div className='span' onClick={() => popUp()}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p>menu</p>
                </div>
                <div className='last'>
                    <div className='span2' onClick={() => popUp()}>
                        <span>X</span>
                    </div>
                    <div className='link'>
                        <Link to='/'><input type="button" onClick={() => popUp()} className='red' value="ABOUT ME"></input></Link>
                        <Link to='/skills'><input type="button" onClick={() => popUp()} className='red' value="SKILLS"></input></Link>
                        <Link to='/project'><input type="button" onClick={() => popUp()} className='red' value="PROJECT"></input></Link>
                        <Link to='/career'><input type="button" onClick={() => popUp()} className='red' value="CAREER"></input></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;