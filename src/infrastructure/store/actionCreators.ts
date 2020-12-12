import {ImageView} from '../../types';
import {ActionType} from './types';

export const changeAuth = (isAuth: boolean) => ({
    type: ActionType.ChangeAuth,
    payload: isAuth,
});

export const loadImageList = (imageList: ImageView[]) => ({
    type: ActionType.LoadImageList,
    payload: imageList,
});
