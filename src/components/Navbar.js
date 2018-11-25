import React, { Component } from 'react';
import Context from '../context';
import trans from '../trans';


class Navbar extends Component {
  state = {
    isToggled: false
  }

  handleToggle = () => {
    this.setState({ isToggled : !this.state.isToggled })
  }
  
  render() {

    return (
      <Context.Consumer>
        {context => {
          return(
            <div className="nav-container">
        <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
        >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={this.props.icon} width={28} height={28} />
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
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">{trans[context.state.language]['Product']}</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">T-Shirt</a>
                <a className="navbar-item">{trans[context.state.language]['Shoes']}</a>
                <a className="navbar-item">{trans[context.state.language]['Pants']}</a>
                <a className="navbar-item">{trans[context.state.language]['Accessories']}</a>
              </div>
            </div>
            <div className="navbar-item navbar-start">
              <input
                className="input is-rounded is-normal is-primary"
                type="text"
                placeholder={trans[context.state.language]['Search Product']}
              />
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>{trans[context.state.language]['Signup']}</strong>
                </a>
                <a className="button is-light">{trans[context.state.language]['Login']}</a>
              </div>
            </div>
            <div className={`navbar-item has-dropdown ${this.state.isToggled == true ? 'is-active' : ''}`}>
              <a className="navbar-link" onClick={this.handleToggle}>{trans[context.state.language]['Language']}</a>
              <div className="navbar-dropdown">
                <a className="navbar-item"
                  onClick={() => {
                    this.handleToggle();
                    context.changeLanguage('en');
                  }}
                >English
                </a>
                <a className="navbar-item"
                  onClick={() => {
                    this.handleToggle();
                    context.changeLanguage('in');
                  }}
                >Indonesia
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </div>
            
          )
        }}
      
      </Context.Consumer>

    );
  }
}

export default Navbar;