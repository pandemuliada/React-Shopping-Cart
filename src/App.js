import React, { Component } from 'react';
import Navbar from './components/Navbar';

import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ProductList />

      </div>
    );
  }
}

export default App;
