import React from 'react';
import { Carousel } from 'antd';

const ProFive = () => {
    return (
        <div className='whiteBox'>
            <div>
                <div id='swiper' className='swiper2'>
                    <img className='pc' src='./image/pc.png' alt=''></img>
                    <div id='mySw'>
                        {/* <Carousel autoplay>
                        </Carousel> */}
                        <div><img src='./image/hhh.png' alt=''></img></div>
                    </div>
                </div>
            </div>
            <div>
                <h3>HHH</h3>
                <div id='info'>
                    <ul>
                        <li>
                            React를 기반한 팀 프로젝트로 호텔 예약 사이트 개발을 하였습니다.<br></br>
                            3명의 팀원으로 구성되었고, 제가 맡은 역할은 전반적인 UI를 담당하였고, 로그인 및 회원가입 기능을 구현하였습니다. 전반적인 UI는 Ant Design을 이용하여 구현하였습니다.<br></br>
                            JavaScript를 이용해 DOM 이벤트 중 마우스 이벤트로 커서를 변경하는 기능과 메인 슬라이드도 라이브러리를 이용해 구현하였습니다. 프로젝트를 통해서 React 라이브러리를 활용하는 방법에 대해 배우게 되었습니다.
                        </li>
                    </ul>
                    <ul>
                        <li><span>참여인원</span> : 3인</li>
                        <li><span>개발기간</span> : 2022. 08. ~ 2022. 08.</li>
                    </ul>
                    <ul>
                        <li><span>Client</span> : React, Node.js, JavaScript, SCSS</li>
                        <li><span>Server</span> : Heroku, Vercel</li>
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
                                <a href='https://hhh-client.vercel.app/'>https://hhh-client.vercel.app</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>GitHub : </span>
                            </div>
                            <div>
                                <a href='https://github.com/hyooa/hhh-client'>https://github.com/hyooa/hhh-client</a><br></br>
                                <a href='https://github.com/hyooa/hhh-server'>https://github.com/hyooa/hhh-server</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProFive;