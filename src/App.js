import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

// Using Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importing Components
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

import { cartItemModifyCount, setLocalStorage } from "./utility/functions";

class App extends Component {
  constructor(props) {
    super(props);
    const filteredCart = JSON.parse(localStorage.getItem("cart-items"));

    this.state = {
      items: [],
      isError: false,
      searchfield: "",
      cart: filteredCart || [],
      cartSubTotal: 0,
      cartTotal: 0,
      cartTax: 0,
      flashAlert: false,
      attributionHTML: "",
    };
  }

  // Alert message when item added to cart
  flashAlert = () => {
    this.setState(
      () => {
        return {
          flashAlert: !this.state.flashAlert,
        };
      },
      () => {
        setTimeout(() => {
          this.setState({
            flashAlert: !this.state.flashAlert,
          });
        }, 500);
      }
    );
  };

  componentDidMount() {
    // Set initial state
    let url = `https://gateway.marvel.com/v1/public/comics?orderBy=modified&ts=1&apikey=0860ac3aed33051450d554be9f0d84d2&hash=c209f33ace43013413284d09f7e06b6e`;

    this.fetchData(url);

    this.countTotalPrice(this.state.cart);
  }

  // Fetch data from api
  fetchData = (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState(() => {
          const newComics = data.data.results;
          return {
            items: newComics.concat(this.state.items),
            attributionHTML: data.attributionHTML,
            // cart: data.data.results,
          };
        })
      )
      .catch((err) => this.setState({ isError: !this.state.isError }));
  };

  // handles when search input value changes
  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  // handles when the search input value is submited
  onSearchClick = (e) => {
    if (e.key === "Enter" || e.detail === 1) {
      if (this.state.searchfield) {
        let url = `https://gateway.marvel.com/v1/public/comics?titleStartsWith=${this.state.searchfield}&limit=15&ts=1&apikey=0860ac3aed33051450d554be9f0d84d2&hash=c209f33ace43013413284d09f7e06b6e`;
        this.fetchData(url);
      }
    }
  };

  // Handles total price of items in cart
  countTotalPrice = (arr) => {
    const cart = [...arr];
    // Gets total price of cart's items
    const total = cart
      .filter((item, index) => cart.indexOf(item) === index)
      .reduce((acc, item) => item.count * item.prices[0].price + acc, 0)
      .toFixed(2);

    const tax = (0.08875 * total).toFixed(2);
    const totalWithTax = (parseFloat(total) + parseFloat(tax)).toFixed(2);

    this.setState(() => {
      return {
        cartSubTotal: total,
        cartTax: tax,
        cartTotal: totalWithTax,
      };
    });
  };

  // handles decrementing quantity count of item added to cart
  decrementCount = (id) => {
    const newValue = cartItemModifyCount(
      this.state.cart,
      id,
      "dec",
      this.state.cart
    );

    this.setState(() => {
      return {
        cart: newValue,
      };
    });
    this.countTotalPrice(this.state.cart);
  };

  // handles incrementing quantity count of item added to cart
  incrementCount = (id) => {
    const newValue = cartItemModifyCount(
      this.state.cart,
      id,
      "inc",
      this.state.cart
    );

    this.setState(() => {
      return {
        cart: newValue,
      };
    });
    this.countTotalPrice(this.state.cart);
  };

  // handles removing Item from cart
  removeItemFromCart = (id, arr) => {
    const cart = [...arr];
    const removedItem = cart.filter((item) => item.id === id);
    // setting count of removed item to 0
    removedItem[0].count = 0;

    this.setState(
      () => {
        return {
          cart: cart.filter((item) => item.id !== id),
        };
      },
      () => {
        this.countTotalPrice(this.state.cart);
      }
    );
  };

  // Method handle adding item to cart
  handleAddtoCart = (id, cartArr, itemsArr) => {
    const added = cartItemModifyCount(itemsArr, id, "add", cartArr);

    this.setState(
      () => {
        return {
          cart: added, //duplicates added after  refresh the page ???
        };
      },
      () => {
        this.countTotalPrice(this.state.cart);
        setLocalStorage(this.state.cart);
      }
    );
    this.flashAlert();
  };

  // Handle resetting cart items
  handleClearCart = (e) => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        localStorage.clear();
      }
    );
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        {this.state.flashAlert ? <Alert /> : null}
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ProductList
                {...this.state}
                onSearchChange={this.onSearchChange}
                onSearchClick={this.onSearchClick}
                handleAddtoCart={this.handleAddtoCart}
              />
            )}
          />
          <Route
            path="/cart"
            render={(props) => (
              <Cart
                {...this.state}
                decrementCount={this.decrementCount}
                incrementCount={this.incrementCount}
                removeItemFromCart={this.removeItemFromCart}
                handleClearCart={this.handleClearCart}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer props={this.state.attributionHTML} />
      </Router>
    );
  }
}

export default App;
