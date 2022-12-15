import React from 'react';
import { Carousel } from 'antd';

const ProFour = () => {
    return (
        <div className='whiteBox'>
            <div>
                <div id='swiper' className='swiper2'>
                    <img className='pc' src='./image/pc.png' alt=''></img>
                    <div id='mySw'>
                        {/* <Carousel autoplay>
                        </Carousel> */}
                        <div><img src='./image/recipe.png' alt=''></img></div>
                    </div>
                </div>
            </div>
            <div>
                <h3>RECIPE</h3>
                <div id='info'>
                    <ul>
                        <li>
                            <strong>PHP</strong>를 기반한 팀 프로젝트로 요리 레시피 사이트 개발을 하였습니다.<br></br>
                            3명의 팀원으로 구성되었고, 제가 맡은 역할은 <strong>베스트 레시피 페이지, 공지사항 페이지</strong>에 대한 UI를 구성하였습니다.<br></br>
                            공지사항에 페이징 기능과 수정 및 삭제 기능을 구현하였습니다.<br></br>
                            팀원들과 git, github를 이용하여 협업한 첫 프로젝트로 실무에서 어떤 방식으로 협업이 이루어지는지 경험할 수 있었습니다.<br></br>
                            수업 시간에 배웠던 기능 구현을 실질적으로 페이지에 적용 해나가는 것에 어려움이 있었지만 소통과 협업을 통해 해결해나갈 수 있었습니다.
                        </li>
                    </ul>
                    <ul>
                        <li><span>참여인원</span> : 3인</li>
                        <li><span>개발기간</span> : 2022. 07. ~ 2022. 07. (13일)</li>
                    </ul>
                    <ul>
                        <li><span>Client</span> : PHP, My-SQL, JavaScript, Sass</li>
                        <li><span>Server</span> : AWS, Dothome</li>
                    </ul>
                </div>
                <div id='link'>
                    <ul>
                        <li>
                            <div>
                                <span>URL : </span>
                            </div>
                            <div>
                                <a href='http://hjindo.dothome.co.kr/php/RECIPE2/'>http://hjindo.dothome.co.kr/php/RECIPE2</a>
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
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProFour;