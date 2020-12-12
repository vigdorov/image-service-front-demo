import imageAPI from '../api/imageAPI';
import {prepareImageToViewList} from '../convertors';
import {actions} from '../infrastructure/store/actions';
import {Image} from '../types';

class ImageService {
    loadImageList () {
        imageAPI.request().then((list: Image[]) => {
            const imageViewList = prepareImageToViewList(list);
            actions.list.load(imageViewList);
        });
    }
}

const imageService = new ImageService();

export default imageService;
