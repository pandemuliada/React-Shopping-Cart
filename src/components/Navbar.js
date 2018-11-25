import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="./favicon.ico" width={28} height={28} />
            &nbsp; React Shop
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-item has-dropdown is-hoverable ">
            <a className="navbar-link">Product</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">T-Shirt</a>
              <a className="navbar-item">Pants</a>
              <a className="navbar-item">Shoes</a>
              <a className="navbar-item">Accecories</a>
            </div>
          </div>
          <div className="navbar-item navbar-start">
            <input
              className="input is-rounded is-normal is-primary"
              type="text"
              placeholder="Search Product"
            />
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
          <div className="navbar-item has-dropdown">
            <a className="navbar-link">Language</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">English</a>
              <a className="navbar-item">Indonesia</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    );
  }
}

export default Navbar;