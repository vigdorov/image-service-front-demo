import React from 'react';
import './arrows.css';
import {LEFT, RIGHT} from '../../consts';

const Arrows: React.FC = () => {
    return (
        <div className='arrows'>
            <button className='arrow arrow_left' type='button' >{LEFT}</button>
            <button className='arrow arrow_right' type='button' >{RIGHT}</button>
        </div>
    );
}

export default Arrows; 