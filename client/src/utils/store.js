import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

//const store = configureStore({
//reducer: {
// Define a top-level state field named `todos`, handled by `todosReducer`
//todos: todosReducer,
//filters: filtersReducer,
//counter: counterReducer,
//},
//});

export default configureStore(reducers);
