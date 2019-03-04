import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ViewPost from './components/ViewPost';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/post/:id' component={ViewPost} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
