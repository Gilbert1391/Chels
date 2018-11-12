import React, { Component } from "react";
import { data } from "../services/fakeDataService";
import ProductNav from "./productNav";
import Product from "./product";

class ProductFullView extends Component {
  state = {
    product: {}
  };

  componentDidMount() {
    let product = data.filter(
      item => item.path === this.props.match.params.product
    );

    product = Object.assign({}, ...product);

    this.setState({ product });
  }
  render() {
    const { product } = this.state;

    return (
      <section className="padding-container">
        <ProductNav item={product} />
        <Product item={product} />
      </section>
    );
  }
}

export default ProductFullView;
