import React from 'react';
import './main.scss';
import { IoIosMail } from 'react-icons/io';
import { MdPhoneIphone } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { SiNaver } from 'react-icons/si';
import { FaUserGraduate, FaRegAddressCard } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <h1>ABOUT ME</h1>
            <div id='mainBox'>
                <div id='myImg'>
                    <div><img src='../image/hyo.png' alt=''></img></div>
                    <div>
                        <ul>
                            <li>권효영</li>
                            <li>1998. 03. 11.</li>
                        </ul>
                    </div>
                </div>
                <div id='introduce'>
                    <div id='top'>
                        <div>
                            <h1>안녕하세요!<br></br>프론트엔드 개발자 <span>권효영</span>입니다.</h1>
                        </div>
                        <div>
                            현실에 안주하지 않고<br></br>늘 새로움에 도전하고 즐기는 개발자가 되고자 합니다.<br></br>
                            이루어 갈 수 있는 목표를 세워가며 개발자로서 끊임없이 성장해나갈 것입니다.<br></br>
                        </div>
                    </div>
                    <div id='bottom'>
                        <div className='left'>
                            <div>
                                <div>
                                    <MdPhoneIphone size='35' />
                                </div>
                                <ul>
                                    <li>연락처</li>
                                    <li>010-4824-0311</li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <IoIosMail size='35' />
                                </div>
                                <ul>
                                    <li>이메일</li>
                                    <li>hyoyung3231@gmail.com</li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <FaUserGraduate size='30' />
                                </div>
                                <ul>
                                    <li>학력</li>
                                    <li>
                                        <ol>울산과학대학교</ol>
                                        <ol>(사회복지학과 자퇴)</ol>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='right'>
                            <div>
                                <div>
                                    <AiFillGithub size='35' color='#fff' />
                                </div>
                                <ul>
                                    <li>Github</li>
                                    <li className='color'><a href='https://github.com/hyooa'>https://github.com/hyooa</a></li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <SiNaver size='28' />
                                </div>
                                <ul>
                                    <li>블로그</li>
                                    <li className='color'><a href='https://blog.naver.com/hyohyo_a'>https://blog.naver.com/hyohyo_a</a></li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <FaRegAddressCard size='35' />
                                </div>
                                <ul>
                                    <li>주소지</li>
                                    <li>울산 남구 삼산동</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;