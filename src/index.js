import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from './reducers/index';
import App from './components/app';
import Cronometro from './components/Cronometro';

const store = createStore(reducers);

ReactDOM.render(
  <BrowserRouter>
      
        <Provider store={store}>
          <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/Cronometro" component={Cronometro} />
          
          
          </Switch>
      </Provider>
          
      
  </ BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
