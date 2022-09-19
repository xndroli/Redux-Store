import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const rootReducer = combineReducers({
	reducer,
});

const store = configureStore(rootReducer);

export default store;
