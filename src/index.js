import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './router/AppRouter';
import './styles/app.scss';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const reduxStore = configureStore;

ReactDOM.render(<Provider store={reduxStore}>
                    <AppRouter/>
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
