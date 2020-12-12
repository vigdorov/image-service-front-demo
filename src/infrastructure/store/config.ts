import {applyMiddleware, bindActionCreators, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {reducer} from './reducer';
import {AppStore, BindActionCreator} from './types';

export const bindAction = bindActionCreators as BindActionCreator;

export const store: AppStore = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
