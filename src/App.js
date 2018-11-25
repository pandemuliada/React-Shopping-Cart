import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Layout from './components/Layout';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
              <Layout />
              <Route path="/" exact components={ProductList} />
              <Route path="/product/:slug" components={ProductDetail} />
          </Router>      
        </div>
    );
  }
}

export default App;
