import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import todoReducer from '../slices/todoSlice';

export default configureStore({
    reducer: {
      todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });