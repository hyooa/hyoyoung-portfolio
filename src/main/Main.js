import React from 'react';
import './main.scss';
import { IoIosMail } from 'react-icons/io';
import { MdPhoneIphone } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { SiNaver } from 'react-icons/si';
import { FaUserGraduate } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { BsFillPersonFill } from 'react-icons/bs';

const Main = () => {
    return (
        <div id='main'>
            <div id='mainBox'>
                <div id='myImg'>
                    <div><img src='../image/hyo.png' alt=''></img></div>
                    <div>
                        <BsFillPersonFill size='35' />
                        <ul>
                            <li>권효영</li>
                            <li>1998. 03. 11.</li>
                        </ul>
                    </div>
                </div>
                <div id='introduce'>
                    <div className='left'>
                        <div>
                            <div>
                                <MdPhoneIphone size='35' />
                                <ul>
                                    <li>연락처</li>
                                    <li>010-4824-0311</li>
                                </ul>
                            </div>
                            <div>
                                <IoIosMail size='35' />
                                <ul>
                                    <li>이메일</li>
                                    <li>hyoyung3231@gmail.com</li>
                                </ul>
                            </div>
                            <div>
                                <FaUserGraduate size='35' />
                                <ul>
                                    <li>학력</li>
                                    <li>울산과학대학교</li>
                                    <li>(사회복지학과 자퇴)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div>
                            <div>
                                <AiFillGithub size='35' />
                                <ul>
                                    <li>Github</li>
                                    <li className='color'>https://github.com/hyooa</li>
                                </ul>
                            </div>
                            <div>
                                <SiNaver size='35' />
                                <ul>
                                    <li>블로그</li>
                                    <li className='color'>https://github.com/hyooa</li>
                                </ul>
                            </div>
                            <div>
                                <TbCertificate size='35' />
                                <ul>
                                    <li>자격증</li>
                                    <li>??</li>
                                    <li>??</li>
                                    <li>??</li>
                                    <li>??</li>
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