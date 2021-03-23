import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from "./reducers";


// первымм парметром принимет reducer, вторым middleware
// middleware передаются через функцию applyMiddleware()
// thunk - middleware для асинхронных actions

export const store = createStore( rootReducer, applyMiddleware(thunk));