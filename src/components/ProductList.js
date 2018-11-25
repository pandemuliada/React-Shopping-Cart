import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import products from '../products';

import Layout from './Layout';
import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    return (
      <div>
        <Layout />
        <section className="section">
          <div className="container">
            <div className="columns">
              {products.map((product, key) => {
                return (
                  // <ProductItem product={product} key={key} />
                  <div className="column is-3">
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
                          Product Detail
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
    );
  }
}

export default ProductList;