import React, { Component } from "react";
import _ from "lodash";
import { data } from "../services/fakeDataService";
import ProductNav from "./productNav";
import Product from "./product";

class ProductFullView extends Component {
  state = {
    product: {},
    index: null
  };

  fetchProduct(product, index) {
    this.setState({ product, index });
  }

  componentDidMount() {
    let product = data.filter(
      item => item.path === this.props.match.params.product
    );
    product = Object.assign({}, ...product);
    const index = _.findIndex(data, product);

    this.fetchProduct(product, index);
  }

  handleNextButton = () => {
    let { index } = this.state;
    index < data.length - 1 ? ++index : (index = 0);
    const product = data[index];

    this.fetchProduct(product, index);
  };

  render() {
    const { product } = this.state;

    return (
      <section className="padding-container">
        <ProductNav item={product} onNextButton={this.handleNextButton} />
        <Product item={product} />
      </section>
    );
  }
}

export default ProductFullView;
