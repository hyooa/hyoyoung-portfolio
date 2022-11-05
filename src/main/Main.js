import React from 'react';
import './main.scss';
import { IoIosMail } from 'react-icons/io';
import { MdPhoneIphone } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { SiNaver } from 'react-icons/si';
import { FaUserGraduate, FaRegAddressCard } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb'; 

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
                        <div><span>"</span><h1>귀여운 귀여운 귀여운 귀여운 권효영입니다.</h1><span>"</span></div>
                        <div>
                            프론트엔드 개발자를 희망하고 있습니다.<br></br>
                            배운 모든 것을 기록하고 공유하는 것을 좋아합니다.<br></br>
                            공유의 중요성을 잘 알기에 항상 새기고 실천하려고 노력합니다.<br></br>
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
                                    <FaUserGraduate size='35' />
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
                                    <AiFillGithub size='35' />
                                </div>
                                <ul>
                                    <li>Github</li>
                                    <li className='color'><a href='https://github.com/hyooa'>https://github.com/hyooa</a></li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <SiNaver size='30' />
                                </div>
                                <ul>
                                    <li>블로그</li>
                                    <li className='color'><a href='https://github.com/hyooa'>https://github.com/hyooa</a></li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <FaRegAddressCard size='35' />
                                </div>
                                <ul>
                                    <li>주소지</li>
                                    <li>서울 송파구</li>
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