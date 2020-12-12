import {bindAction, store} from './config';
import {changeAuth, loadImageList} from './actionCreators';

export const actions = {
    changeAuth: bindAction(changeAuth, store.dispatch),
    list: {
        load: bindAction(loadImageList, store.dispatch),
    },
};