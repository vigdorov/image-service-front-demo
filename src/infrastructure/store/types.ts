import {Dispatch, Store} from 'redux';
import {ImageView} from '../../types';

export type State = {
    isAuth: boolean;
    imageList: ImageView[];
}
export enum ActionType {
    ChangeAuth = 'CHANGE_AUTH',
    LoadImageList = 'LOAD_IMAGE_LIST',
}
export type Action = {
    type: ActionType,
    payload?: any,
};

export type AppStore = Store<State, Action>;

export type ActionCreator<TArgs extends unknown[], A extends Action> = (...args: TArgs) => A;
export type BindActionCreator = <A extends Action, C extends (...args: any[]) => A>(actionCreator: C, dispatch: Dispatch<A>) => C;
