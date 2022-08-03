import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import {configureStore} from '@reduxjs/toolkit'; 
import rootReducer from '.';

const configureStore = () => {
     const store =createStore(rootReducer, applyMiddleware(thunk));

     return store;
}

export default configureStore;