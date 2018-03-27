import {combineReducers, createStore, applyMiddleware, compose} from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	authenticated: (authenticatedState = false) => authenticatedState,
	nextDeparture,
	favoritePlaces,
	favoritePlacesPanels
});

const store = createStore(reducers, window.__TRN_INITIAL_STATE__, composeEnhancers(applyMiddleware(thunk)));
window.tnStore = store;

export default store;
