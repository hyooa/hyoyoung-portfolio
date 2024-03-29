import React from 'react';
import { Carousel } from 'antd';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProFour = () => {
    Aos.init();

    return (
        <div className='whiteBox boxFour' data-aos="fade-up">
            <div>
                <div id='swiper' className='swiper2'>
                    <img className='pc' src='./image/pc.png' alt=''></img>
                    <div id='mySw'>
                        <Carousel autoplay>
                            <div><img src='./image/recipe.png' alt=''></img></div>
                            <div><img src='./image/recipe2.png' alt=''></img></div>
                            <div><img src='./image/recipe3.png' alt=''></img></div>
                            <div><img src='./image/recipe4.png' alt=''></img></div>
                            <div><img src='./image/recipe5.png' alt=''></img></div>
                            <div><img src='./image/recipe6.png' alt=''></img></div>
                            <div><img src='./image/recipe7.png' alt=''></img></div>
                            <div><img src='./image/recipe8.png' alt=''></img></div>
                            <div><img src='./image/recipe9.png' alt=''></img></div>
                            <div><img src='./image/recipe10.png' alt=''></img></div>
                            <div><img src='./image/recipe11.png' alt=''></img></div>
                            <div><img src='./image/recipe12.png' alt=''></img></div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div>
                <h3>RECIPE</h3>
                <div id='info'>
                    <ul>
                        <li>
                            <strong>PHP</strong>를 기반한 팀 프로젝트로 요리 레시피 사이트 개발을 하였습니다.<br></br>
                            3명의 팀원으로 구성되었고, 제가 맡은 역할은 <strong>로그인, 레시피 상세보기, 베스트 레시피, 공지사항 페이지</strong>등에 대한 UI를 구성하였습니다.<br></br>
                            공지사항에 페이징 기능과 수정 및 삭제 기능을 구현하였습니다.<br></br>
                            팀원들과 git, github를 이용하여 협업한 첫 프로젝트로 실무에서 어떤 방식으로 협업이 이루어지는지 경험할 수 있었습니다.
                        </li>
                    </ul>
                    <ul>
                        <li><span>참여인원</span> : 3인</li>
                        <li><span>개발기간</span> : 2022. 07. ~ 2022. 07. (13일)</li>
                    </ul>
                    <ul>
                        <li><span>Client</span> : PHP, JavaScript, css</li>
                        <li><span>Server</span> : My-SQL, Dothome</li>
                    </ul>
                </div>
                <div id='link'>
                    <ul>
                        <li>
                            <div>
                                <span>URL : </span>
                            </div>
                            <div>
                                <a href='http://hyooa.dothome.co.kr/php/RECIPE2'>http://hyooa.dothome.co.kr/php/RECIPE2</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>GitHub : </span>
                            </div>
                            <div>
                                <a href='https://github.com/hyooa/recipe'>https://github.com/hyooa/recipe</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>PPT : </span>
                            </div>
                            <div>
                                <a href='https://docs.google.com/presentation/d/1G48_oaroMAIa-nwXJ_Gwfnhina-OUoeI/edit?usp=share_link&ouid=117407450755402319923&rtpof=true&sd=true'>ppt</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProFour;