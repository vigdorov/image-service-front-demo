import {Reducer} from 'redux';
import {Action, ActionType, State} from './types';

const INIT_STATE: State = {
    isAuth: false,
    imageList: [],
};

export const reducer: Reducer<State, Action> = (state: State = INIT_STATE, action: Action): State => {
    switch (action.type) {
        case ActionType.ChangeAuth: {
            return {
                ...state,
                isAuth: action.payload,
            };
        }
        case ActionType.LoadImageList: {
            return {
                ...state,
                imageList: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
