import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import products from '../products';
import trans from '../trans';
import Context from '../context'; 

import Navbar from '../components/Navbar';


class ProductList extends Component {
  render() {
    return (

      <Context.Consumer>
        {context => {
          return(
            <div>
              <Navbar icon="../favicon.ico" />
              <section className="section">
                <div className="container">
                  <div className="columns">
                    {products.map((product, key) => {
                      return (
                        <div className="column is-3" key={key}>
                          <div className="card">
                            <div className="card-image">
                              <figure className="image is-4by3">
                                <img
                                  src={product.imageUrl}
                                  alt={product.title}
                                />
                              </figure>
                            </div>
                            <div className="card-content">
                              <h4 className="title">{product.title}</h4>
                              <div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris.
                              </div>
                              <Link
                                className="button is-primary is-normal"
                                to={`/product/${product.slug}`}
                              >
                                {trans[context.state.language]['Product Detail']}
                              </Link>
                              <p>$ {product.price}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  
                  </div>
                </div>
              </section>
            </div>
          )
        }}
      </Context.Consumer>

    );
  }
}

export default ProductList;