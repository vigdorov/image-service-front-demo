import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {imageListSelector} from '../../selectors';
import imageService from '../../services/ImageService';

const ImageList: React.FC = () => {
    useEffect(() => {
        imageService.loadImageList();
    }, []);
    const list = useSelector(imageListSelector);
    return (
        <div>
            {list.map(image => (
                <div key={image._id} style={{width: '100px', height: '100px', display: 'flex'}}>
                    <img src={image.url} alt="hui" />
                </div>
            ))}
        </div>
    );
};

export default React.memo(ImageList);