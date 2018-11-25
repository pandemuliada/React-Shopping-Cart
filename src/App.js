import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail'

import Context from './context';

class App extends Component {

  state = {
    language: 'en'
  }

  changeLanguage = language => {
    this.setState({ language })
  }

  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        changeLanguage: this.changeLanguage

      }
      }>
        <Router>
          <div>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:slug" component={ProductDetail} />
          </div>
        </Router>      

      </Context.Provider>
    );
  }
}

export default App;
