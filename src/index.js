import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


import requireAuth from './components/require_authentication';
import App from './components/app';
import Home from './components/home';
import Resources from './components/resources';
import UserList from './components/UserList';
import reducers from './reducers';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>

      <Route path="/" component={App}>

        <IndexRoute component={Home}/>
        <Route path="resources" component={requireAuth(Resources)} />
        <Route path="userList" component={UserList} />
        
      </Route>

    </Router>
  </Provider>
  , document.getElementById('root'));
