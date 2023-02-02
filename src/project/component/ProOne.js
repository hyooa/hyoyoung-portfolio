import React from 'react';
import { Carousel } from 'antd';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProOne = () => {
    Aos.init();

    return (
        <div className='whiteBox' data-aos="fade-up">
            <div>
                <div id='swiper'>
                    <img className='pc' src='./image/pc.png' alt=''></img>
                    <div id='mySw'>
                        <Carousel autoplay>
                            <div>
                                <img src='./image/po1.jpg' alt=''></img>
                            </div>
                            <div>
                                <img src='./image/po2.jpg' alt=''></img>
                            </div>
                            <div>
                                <img src='./image/po3.jpg' alt=''></img>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div id='none'>
                    <img className='tablet' src='./image/tablet.png' alt=''></img>
                    <img className='img2' src='./image/tab.jpg' alt=''></img>
                </div>
                <div id='none'>
                    <img className='mobile' src='./image/mobile.png' alt=''></img>
                    <img className='img3' src='./image/mo.jpg' alt=''></img>
                </div>
            </div>
            <div>
                <h3>Portfolio</h3>
                <div id='info'>
                    <ul>
                        <li>
                            <strong>포트폴리오</strong> 용도로 제작한 웹사이트입니다.<br></br>
                            지금 보고 있는 바로 이 웹사이트에 해당합니다.<br></br>
                            순수 <strong>React</strong>로 개발한 프로젝트입니다.<br></br>
                            Ant Design의 Carousel을 사용하여 슬라이드 효과를 주었고,<br></br>
                            <strong>Vercel</strong>을 이용하여 배포하였습니다.<br></br>
                            현재 반응형은 제작중에 있습니다. 계속 업데이트 해나갈 예정입니다.<br></br>
                        </li>
                    </ul>
                    <ul>
                        <li><span>참여인원</span> : 1인</li>
                        <li><span>개발기간</span> : 2022. 11. 01. ~ 2022. 11. 05.</li>
                    </ul>
                    <ul>
                        <li><span>Client</span> : React, JavaScript, Sass</li>
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
                                <a href='https://hyoyoung-portfolio.vercel.app/'>https://hyoyoung-portfolio.vercel.app</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>GitHub : </span>
                            </div>
                            <div>
                                <a href='https://github.com/hyooa/hyoyoung-portfolio'>https://github.com/hyooa/hyoyoung-portfolio</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProOne;