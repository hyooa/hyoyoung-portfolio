import React from 'react';
import ProFive from './component/ProFive';
import ProFour from './component/ProFour';
import ProOne from './component/ProOne';
import ProThr from './component/ProThr';
import ProTwo from './component/ProTwo';
import './project.scss';

const Project = () => {
    return (
        <div id='project'>
            <h1>PROJECT</h1>
            <div id='projectBox'>
                <ProOne />
                <ProTwo />
                <ProThr />
                <ProFour />
                <ProFive />
            </div>
        </div>
    );
};

export default Project;