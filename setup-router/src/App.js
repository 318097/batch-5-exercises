import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './styles/App.css';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <React.Fragment>
          <Navbar />
          <Route exact activeClassName="active" path="/home" component={Home} />
          <Route exact activeClassName="active" path="/about" component={About} />
          <Route exact activeClassName="active" path="/contact" component={Contact} />
          <Route path="*" component={PageNotFound} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
