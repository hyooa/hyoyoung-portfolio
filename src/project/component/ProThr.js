import React from 'react';
import { Carousel } from 'antd';

const ProThr = () => {
    return (
        <div className='whiteBox boxThr'>
            <div>
                <div id='swiper' className='swiper3'>
                    <img className='mobile' src='./image/mobile.png' alt=''></img>
                    <div id='mySw'>
                        <Carousel autoplay>
                            <div>
                                <img src='./image/todolist.gif' alt=''></img>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div>
                <h3>TypeScript TodoList</h3>
                <div id='info'>
                    <ul>
                        <li>
                            포트폴리오 용도로 제작한 웹사이트입니다.<br></br>
                            지금 보고 있는 바로 이 웹사이트에 해당합니다.<br></br>
                            이미 순수 React로 개발을 완료한 프로젝트였지만, Next.js의 학습을 위해<br></br>
                            이를 Next.js로 다시 개발하였습니다. 그 과정에서 서버 사이드 렌더링을<br></br>
                            함께 지원하는 Next.js의 위대함을 느낄 수 있었습니다. 또한, Vercel을<br></br>
                            이용하여 정적 웹사이트의 Lean한 배포도 경험해볼 수 있었습니다.
                        </li>
                    </ul>
                    <ul>
                        <li><span>참여인원</span> : 1인</li>
                        <li><span>개발기간</span> : 2022. 11. 05. ~ 2022. 11. 06.</li>
                    </ul>
                    <ul>
                        <li><span>Client</span> : React, Node.js, SCSS</li>
                        <li><span>Server</span> : Vercel</li>
                        <li><span>Library</span> : React, Node.js, SCSS</li>
                    </ul>
                </div>
                <div id='link'>
                    <ul>
                        <li>
                            <div>
                                <span>URL : </span>
                            </div>
                            <div>
                                <a href='https://typescript-todolist.vercel.app'>https://typescript-todolist.vercel.app</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>GitHub : </span>
                            </div>
                            <div>
                                <a href='https://github.com/hyooa/typescript-todolist'>https://github.com/hyooa/typescript-todolist</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProThr;