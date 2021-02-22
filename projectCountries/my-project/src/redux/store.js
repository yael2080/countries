import { createStore, combineReducers, applyMiddleware, } from 'redux';
import userReducers from './reducers/userReducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import {newUser, getUser } from './middlware/crud'




const reducer = combineReducers({userReducers });


const store = createStore(reducer,composeWithDevTools(applyMiddleware(newUser, getUser))  );
window.store = store;
export default store;