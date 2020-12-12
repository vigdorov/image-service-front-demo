import {IMAGES_API_PATH} from '../consts';
import http from '../infrastructure/http/http';

class ImageAPI {
    request () {
        return http.get(`${IMAGES_API_PATH}/list`).then(({data}) => data);
    }

    find () {

    }

    create () {

    }

    remove () {

    }

    toggleLike () {

    }
}

const imageAPI = new ImageAPI();

export default imageAPI;
