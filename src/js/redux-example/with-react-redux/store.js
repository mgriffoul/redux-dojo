import { createStore } from 'redux';
import { ADD_ITEM } from './actions';

const initialState = {
    items: []
};

/* REDUCER */

const itemReducer = (state, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default:
            return state;
    }
};

/* STORE */

const store = createStore(
    itemReducer, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

