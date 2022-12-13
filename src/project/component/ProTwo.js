import React from 'react';
import { Carousel } from 'antd';

const ProTwo = () => {
    return (
        <div className='whiteBox boxTwo'>
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
                            React를 기반한 개인프로젝트로 축구 사이트 개발을 하였습니다.<br></br>
                            축구 경기 티켓 예약을 하기 위해서 축구 클럽 페이지에 들어갔던 경험이 있는데, <br></br>
                            이때 축구 클럽 홈페이지가 팀에 관련된 선수, 경기, 결과에 대한 정보뿐 아니라 굿즈, 경기 티켓 등 쇼핑몰의 역할도 하는 범용성이 넓은 페이지라는 생각을 하였습니다.<br></br>
                            이를 다시 활용하여 페이지를 구성하는 연습을 해보면 좋겠다고 생각하였고, 복잡하고 많은 정보를 전달하는 기존의 홈페이지에서 최소한의 필요한 정보만 모아서 페이지를 재구성하고자 하였습니다.<br></br>
                            회원가입 페이지 레이아웃 및 유효성 검사 기능을 구현하였고 관리자 페이지를 관리자 계정에서만 접속할 수 있게 따로 만들었고 그 안에서 선수, 티켓, 팀 등록 시 사진 업로드에 중점을 두어서 구현하였습니다.<br></br>
                            선수단 페이지 구성 시 페이지를 반으로 나누어 각각 선수단 명단과 클릭한 선수의 이미지와 정보들이 보이게 하여 가시성을 높였습니다.<br></br>
                            처음으로 개인 프로젝트를 하면서 많은 시행착오를 겪었습니다.<br></br>
                            프론트엔드 오픈 채팅, 구글링, 유튜브 검색 등을 활용해 질문하고,<br></br>
                            배우고를 반복해 나가면서 문제를 해결하기 위해서 노력하였습니다.<br></br>
                            결과적으로는 혼자 프로젝트를 이끌면서 성취감도 있었지만,<br></br>
                            부족함을 많이 느낌과 동시에 배움에 대한 동기부여를 가지게 되었습니다.
                        </li>
                    </ul>
                    <ul>
                        <li><span>참여인원</span> : 1인</li>
                        <li><span>개발기간</span> : 2022. 08. ~ 2022. 10.</li>
                    </ul>
                    <ul>
                        <li><span>Client</span> : React, Node.js, SCSS</li>
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
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProTwo;