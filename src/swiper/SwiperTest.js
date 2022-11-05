import React from 'react';
import './test.scss';
import { Carousel } from 'antd';

const SwiperTest = () => {
    return (
        <div id='swiper'>
            <Carousel autoplay>
                <div>
                    <img src='./image/hyo.png' alt=''></img>
                </div>
                <div>
                    <img src='./image/hyo.png' alt=''></img>
                </div>
                <div>
                    <img src='./image/hyo.png' alt=''></img>
                </div>
                <div>
                    <img src='./image/hyo.png' alt=''></img>
                </div>
            </Carousel>
        </div>
    );
};

export default SwiperTest;