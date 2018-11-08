import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import Home from "./main-pages/home";
import Shop from "./main-pages/shop";
import Cart from "./main-pages/cart";
import Journal from "./main-pages/journal";
import Lookbook from "./main-pages/lookbook";
import NotFound from "./main-pages/notFound";
import "./App.scss";
import "./styles/sass/main.scss";

class App extends Component {
  state = {
    headerDark: false
  };

  handleHeaderColor = e => {
    let { headerDark } = this.state;
    const target = e.currentTarget.textContent.toLowerCase();

    target === "home" || target === "chels"
      ? (headerDark = false)
      : (headerDark = true);

    this.setState({ headerDark });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          changeColor={this.handleHeaderColor}
          headerDark={this.state.headerDark}
        />
        <main>
          <Switch>
            <Route path="/lookbook" component={Lookbook} />
            <Route path="/journal" component={Journal} />
            <Route path="/cart" component={Cart} />
            <Route path="/shop" component={Shop} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
