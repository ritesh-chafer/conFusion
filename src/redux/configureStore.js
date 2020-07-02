import { createStore, bindActionCreators } from 'redux';
import {Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(Reducer,initialState);
    return store;
    
}