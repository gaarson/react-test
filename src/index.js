import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import sagas from './saga-middleware/sagas';
import * as reducers from './reducers';

import EditEmploye from './components/edit/edit-employe';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/:depName/:id" component={EditEmploye} />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
