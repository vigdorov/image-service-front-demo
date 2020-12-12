import React, {useEffect} from 'react';
import './imageList.css';
import {useSelector} from 'react-redux';

import {imageListSelector} from '../../selectors';
import imageService from '../../services/ImageService';

const ImageList: React.FC = () => {
    useEffect(() => {
        imageService.loadImageList();
    }, []);
    const list = useSelector(imageListSelector);
    return (
        <div className='gallery'>
            {list.map(image => (
                <div key={image._id} className='image__box'>
                    <img className='image' src={image.url} alt="hui" />
                </div>
            ))}
        </div>
    );
};

export default React.memo(ImageList);