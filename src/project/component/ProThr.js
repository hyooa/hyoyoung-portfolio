import React from 'react';
import { Carousel } from 'antd';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProThr = () => {
    Aos.init();

    return (
        <div className='whiteBox boxThr' data-aos="fade-up">
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
                            <strong>TypeScript</strong>를 기반한 개인프로젝트로 TodoList 사이트를 개발하였습니다.<br></br>
                            학원 기간이 끝날 때쯤 선생님께서 TypeScript에 대한 장, 단점을 소개해주셨지만 기간이 짧아 깊이 있게 배우지는 못하였습니다.<br></br>
                            저는 코딩 비전공자이기에 다양한 코드에 대한 경험과 이해가 부족하지만 새로운 언어에 대해서 <strong>직접 부딪혀가면서 배우고 극복해 나가고자</strong> 하였습니다.<br></br>
                            먼저 TypeScript를 짧게 배운 것으로만 끝내기 아쉬워 개인 프로젝트를 TypeScript로 활용하며 코드에 익숙해지기 위해서 노력했습니다.
                        </li>
                    </ul>
                    <ul>
                        <li><span>참여인원</span> : 1인</li>
                        <li><span>개발기간</span> : 2022. 11. 05. ~ 2022. 11. 06.</li>
                    </ul>
                    <ul>
                        <li><span>Client</span> : React, TypeScript, Sass</li>
                        <li><span>Server</span> : Vercel</li>
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