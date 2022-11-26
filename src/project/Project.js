import React from 'react';
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
            </div>
        </div>
    );
};

export default Project;