import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import { combineReducers, compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import authReducer from './store/reducers/auth'
import eventsRedcers from './store/reducers/events'
import bookingsReducers from './store/reducers/bookings'

const rootReducer = combineReducers({
    auth:authReducer,
    event:eventsRedcers,
    booking:bookingsReducers
})
// process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

const app =
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
