import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducer({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            Leaders: Leaders
        })
    );
    return store;
}