import {v4} from 'uuid';
import {Image, ImageView} from '../types';

export const prepareImageToViewList = (imageList: Image[]): ImageView[] => {
    return imageList.map(imageItem => ({
        ...imageItem,
        _id: v4(),
    }));
};
