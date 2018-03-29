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

const middleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || undefined;

/* STORE */
const store = createStore(
    itemReducer, 
    initialState,
	middleware);

export default store;

