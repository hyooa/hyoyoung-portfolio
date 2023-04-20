import React from 'react';
import { Carousel } from 'antd';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProTwo = () => {
    Aos.init();

    return (
        <div id='boxTwo' className='whiteBox boxTwo' data-aos="fade-up">
            <div>
                <div id='swiper' className='swiper2'>
                    <img className='pc' src='./image/pc.png' alt=''></img>
                    <div id='mySw'>
                        <Carousel autoplay>
                            <div><img src='./image/CHELSEA1.png' alt=''></img></div>
                            <div><img src='./image/CHELSEA2.png' alt=''></img></div>
                            <div><img src='./image/CHELSEA3.png' alt=''></img></div>
                            <div><img src='./image/CHELSEA4.png' alt=''></img></div>
                            <div><img src='./image/CHELSEA5.png' alt=''></img></div>
                            <div><img src='./image/CHELSEA6.png' alt=''></img></div>
                            <div><img src='./image/CHELSEA7.png' alt=''></img></div>
                            <div><img src='./image/CHELSEA8.png' alt=''></img></div>
                            <div><img src='./image/CHELSEA9.png' alt=''></img></div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div>
                <h3>Chelsea Football Club</h3>
                <div id='info'>
                    <ul>
                        <li>
                            <strong>React</strong>를 기반한 개인 프로젝트로 축구 사이트 개발을 하였습니다.<br></br>
                            회원가입 페이지 레이아웃 및 유효성 검사 기능을 구현하였고 <strong>관리자 페이지를 관리자 계정에서만 접속할 수 있게 따로 만들었습니다.</strong> 그 안에서 선수, 티켓, 팀 등록 시 사진 업로드에 중점을 두어서 구현하였습니다.<br></br>
                            선수단 페이지 구성 시 페이지를 반으로 나누어 각각 선수단 명단과 클릭한 선수의 이미지와 정보들이 보이게 하여 가시성을 높였습니다.<br></br>
                            처음으로 개인 프로젝트를 하면서 많은 시행착오를 겪었지만<br></br>
                            결과적으로는 혼자 프로젝트를 이끌면서 <strong>성취감</strong>과<br></br>
                            부족함을 많이 느낌과 동시에 <strong>배움에 대한 동기부여</strong>를 가지게 되었습니다.
                        </li>
                    </ul>
                    <ul>
                        <li><span>참여인원</span> : 1인</li>
                        <li><span>개발기간</span> : 2022. 08. ~ 2022. 10.</li>
                    </ul>
                    <ul>
                        <li><span>Client</span> : React, Node.js, JavaScript, Sass</li>
                        <li><span>Server</span> : Heroku, Vercel, AWS</li>
                        {/* <li><span>API</span> : Kakao Map</li> */}
                    </ul>
                </div>
                <div id='link'>
                    <ul>
                        <li>
                            <div>
                                <span>URL : </span>
                            </div>
                            <div>
                                <a href='https://hyo-portfolio.vercel.app/'>https://hyo-portfolio.vercel.app</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>GitHub : </span>
                            </div>
                            <div>
                                <a href='https://github.com/hyooa/hyo-portfolio'>https://github.com/hyooa/hyo-portfolio</a><br></br>
                                <a href='https://github.com/hyooa/hyo-portfolio-server'>https://github.com/hyooa/hyo-portfolio-server</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>PPT : </span>
                            </div>
                            <div>
                                <a href='https://docs.google.com/presentation/d/16aRXPnNlb6xvE9uKFLo-bQ93Ob8Apvb9/edit?usp=share_link&ouid=117407450755402319923&rtpof=true&sd=true'>ppt</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProTwo;