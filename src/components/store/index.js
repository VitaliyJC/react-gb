import {compose, createStore} from 'redux'
import {toggleReducer} from "./profile/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(toggleReducer, composeEnhancers())