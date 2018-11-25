import React, { Component } from 'react';

import products from '../products';

import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    return (
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
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <h4 className="title">{product.title}</h4>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
            </div>
            <a
              className="button is-primary is-normal"
              href="product-detail.html"
            >
              Product Detail
            </a>
            <p>$ 320.00</p>
          </div>
        </div>
      </div>
              )
            })}
          
          </div>
        </div>
      </section>
    
    );
  }
}

export default ProductList;