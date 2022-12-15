import React from 'react';
import './skills.scss';

const Skills = () => {
    return (
        <div id='skills'>
            <h1>SKILLS</h1>
            <div id='skillBox'>
                <div>
                    <div>Frontend</div>
                    <div>
                        <ul>
                            <li><img src='./image/html.jpg' alt=''></img></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>Backend/DataBase</div>
                    <div>
                        <ul>
                            <li><img src='./image/PHP.png' alt=''></img></li>
                            <li><img src='./image/mysql.png' alt=''></img></li>
                        </ul>
                    </div>
                </div>
                <div className='version'>
                    <div>Version Control</div>
                    <div>
                        <ul>
                            <li><img src='./image/git.jpg' alt=''></img></li>
                            <li><img src='./image/gitt.jpg' alt=''></img></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>Deployment</div>
                    <div>
                        <ul id='dep'>
                            <img src='./image/vercel.jpg' alt=''></img>
                            <img src='./image/heroku.jpg' alt=''></img>
                            <img src='./image/amazon.jpg' alt=''></img>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;