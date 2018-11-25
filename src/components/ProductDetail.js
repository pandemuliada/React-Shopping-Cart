import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Context from '../context';

import products from '../products';
import trans from '../trans';



class ProductDetail extends Component {
  render() {

    // URL untuk Routing 
    const slug = this.props.match.params.slug;
    const product = products.find(product => product.slug == slug)

    return (
      <Context.Consumer>
        {context => {
          return(
            <div>
              <Navbar icon="../favicon.ico" />
              <section className="section">
                <div className="container">
                  <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                      <li>
                        <a href="#">{trans[context.state.language]['Product']}</a>
                      </li>
                      <li>
                        <a href="#">{trans[context.state.language]['Product Detail']}</a>
                      </li>
                      <li className="is-active">
                        <a href="#" aria-current="page">
                          {product.title}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </section>
              <section>
                <div className="container">
                  <div className="columns">
                    <div className="column is-4">
                      <figure className="image">
                        <img src={product.imageUrl} alt={product.title} />
                      </figure>
                      <br />
                    </div>
                    <div className="column is-5">
                      <h1 className="title">{product.title}</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Corrupti nostrum, nobis quia quod modi in ratione velit,
                        obcaecati facere eius quos hic dolorem ea excepturi odit
                        delectus magni suscipit mollitia.
                      </p>
                      <br />
                      <a href="#!" className="button is-primary" onClick="alert('Helo')">
                      {trans[context.state.language]['Add to Cart']}
                      </a>
                    </div>
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

export default ProductDetail;