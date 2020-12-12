import {State} from '../infrastructure/store/types';

export const imageListSelector = (state: State) => state.imageList;
export const authSelector = (state: State) => state.isAuth;
