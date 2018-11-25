import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      <div className="column is-3">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={this.props.product.imageUrl}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <h4 className="title">{this.props.product.title}</h4>
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
    );
  }
}

export default ProductItem;