import React from 'react';
import './career.scss';

const Career = () => {
    return (
        <div id='career'>
            <h1>CAREER</h1>
            <div id='careerBox'>
                <div>
                    <img src='./image/그린.png' alt=''></img>
                </div>
                <div>
                    <div id='top'>
                        <div>
                            <h3>그린컴퓨터아카데미(울산캠퍼스)</h3>
                            <h4>[스마트웹&콘텐츠캐발] PWA제작 프론트엔드개발 디지털인재 양성과정</h4>
                            <span>2022. 03. ~ 2022. 09.</span>
                        </div>
                        <div>
                            <ul>
                                <li>과정내용</li>
                                <li>
                                    웹기획, 스토리보드작성, 시안작업, 웹폰트&UI제작<br></br>
                                    웹표준과 접근성, CSS3, HTML5, Jquery, JavaScript,<br></br>
                                    모바일 디바이스를 이용해 최적화된 웹페이지를 구현하는 기술을 습득한다.<br></br>
                                    React.js를 통해 예약시스템(관리자모드, 고객모드) 제작 진행,<br></br>
                                    현장실무에 즉시 투입이 가능한 수준의 집중프로젝트이다.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id='bottom'>
                        <div>
                            {/* <h3>Frontend</h3> */}
                            <h3>STACKS</h3>
                            <div>
                                <ul>
                                    <li>HTML5</li>
                                    <li>
                                        HTML5 표준을 준수한 마크업 가능
                                    </li>
                                </ul>
                                <ul>
                                    <li>CSS3</li>
                                    <li>
                                        웹 페이지 스타일링 가능<br></br>
                                        flex, grid를 활용한 웹 사이트 레이아웃 가능<br></br>
                                        hover효과, animation 효과를 활용한 스타일링 가능<br></br>
                                        미디어 쿼리를 활용한 반응형 웹 사이트 제작 가능<br></br>
                                    </li>
                                </ul>
                                <ul>
                                    <li>SCSS</li>
                                    <li>
                                        SCSS 문법을 사용한 웹사이트 스타일링 가능
                                    </li>
                                </ul>
                                <ul>
                                    <li>React</li>
                                    <li>
                                        React를 사용한 웹앱 제작 가능<br></br>
                                        useState, useEffect, axios, useReducer, useCallback, Route 리덕스 등을 활용한 웹앱 제작 가능
                                    </li>
                                </ul>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>
                                        동적인 웹사이트 제작 가능<br></br>
                                        JSON, 배열메서드, Object, api, 캔버스 애니메이션을 활용한 다양한 웹 사이트 제작 가능
                                    </li>
                                </ul>
                                <ul>
                                    <li>TypeScript</li>
                                    <li>
                                        간단한 TodoList 제작 가능
                                    </li>
                                </ul>
                                <ul>
                                    <li>Node.js</li>
                                    <li>
                                        간단한 웹 서버 제작 가능
                                    </li>
                                </ul>
                                <ul>
                                    <li>MY-SQL</li>
                                    <li>
                                        간단한 쿼리문 사용 가능<br></br>
                                        데이터베이스와 테이블 생성, 데이터 삽입과 삭제, 조인 툴 사용 가능
                                    </li>
                                </ul>
                                <ul>
                                    <li>PHP</li>
                                    <li>
                                        로그인, 로그아웃, 회원가입 페이지 제작 가능<br></br>
                                        게시판 제작 가능
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div>
                            <h3>Backend</h3>
                            <div>
                                <ul>
                                    <li>MY-SQL</li>
                                    <li>
                                        간단한 쿼리문 사용 가능<br></br>
                                        데이터베이스와 테이블 생성, 데이터 삽입과 삭제, 조인 툴 사용 가능
                                    </li>
                                </ul>
                                <ul>
                                    <li>PHP</li>
                                    <li>
                                        로그인, 로그아웃, 회원가입 페이지 제작 가능<br></br>
                                        게시판 제작 가능
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;