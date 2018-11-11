import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Header from "./components/header";
import Home from "./main-pages/home";
import Footer from "./components/footer";
import Shop from "./main-pages/shop";
import Cart from "./main-pages/cart";
import Journal from "./main-pages/journal";
import Lookbook from "./main-pages/lookbook";
import NotFound from "./main-pages/notFound";
import Sizing from "./footer-pages/sizing";
import Contact from "./footer-pages/contact";
import Privacy from "./footer-pages/privacy";
import Shipping from "./footer-pages/shipping";
import Returns from "./footer-pages/returns";
import Stores from "./footer-pages/stores";
import Stockists from "./footer-pages/stockists";
import "./App.scss";
import "./styles/sass/main.scss";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Header pathName={this.props.location.pathname} />
        <main>
          <Switch>
            <Route path="/stockists-chels" component={Stockists} />
            <Route path="/stores-chels" component={Stores} />
            <Route path="/returns-exchanges-chels" component={Returns} />
            <Route path="/shipping-handling-chels" component={Shipping} />
            <Route path="/privacy-chels" component={Privacy} />
            <Route path="/contact-chels" component={Contact} />
            <Route path="/sizing-chart-chels" component={Sizing} />
            <Route path="/lookbook-chels" component={Lookbook} />
            <Route path="/journal-chels" component={Journal} />
            <Route path="/cart" component={Cart} />
            <Route path="/shop-chels" component={Shop} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
