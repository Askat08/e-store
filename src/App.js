import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Using Bootstrap 4
import "bootstrap/dist/css/bootstrap.min.css";

// Importing Components
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isError: false,
      searchfield: "",
      cart: [],
      cartSubTotal: 0,
      cartTotal: 0,
      cartTax: 0,
      messageAlert: false,
      attributionHTML: "",
    };
  }

  // Alert message when item added to cart
  flashAlert = () => {
    this.setState(
      () => {
        return {
          messageAlert: !this.state.messageAlert,
        };
      },
      () => {
        setTimeout(() => {
          this.setState({
            messageAlert: !this.state.messageAlert,
          });
        }, 1500);
      }
    );
  };

  // Scroll to top action
  scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  componentDidMount() {
    // Set initial state
    fetch(
      `http://gateway.marvel.com/v1/public/comics?orderBy=modified&ts=1&apikey=0860ac3aed33051450d554be9f0d84d2&hash=c209f33ace43013413284d09f7e06b6e`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          items: data.data.results,
          attributionHTML: data.attributionHTML,
          // cart: data.data.results,
        })
      )
      .catch((err) => this.setState({ isError: !this.state.isError }));
  }

  // Fetch data based on search input
  fetchData = (e) => {
    this.setState({ searchfield: e.target.value });
    fetch(
      `http://gateway.marvel.com/v1/public/comics?titleStartsWith=${this.state.searchfield}&limit=15&ts=1&apikey=0860ac3aed33051450d554be9f0d84d2&hash=c209f33ace43013413284d09f7e06b6e`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState(() => {
          const newComics = data.data.results;
          return {
            items: newComics.concat(this.state.items),
          };
        })
      )
      .catch((err) => this.setState({ isError: !this.state.isError }));
  };

  // Method handle when search input value changes
  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  // Method handle when submit the search input value
  onSearchClick = (e) => {
    if (e.key === "Enter" || e.detail === 1) {
      this.fetchData(e);
    }
  };

  // Method for get Item by its ID
  getItembyId = (id) => {
    const comic = this.state.items.find((item) => item.id === id);
    return comic;
  };

  // Handle total price of items in cart
  countTotalPrice = () => {
    const total = this.state.cart
      .filter((item, index) => {
        return this.state.cart.indexOf(item) === index;
      })
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

  // Method handle decrement count of quantity of item added to cart
  decrementCount = (id) => {
    let comics = [...this.state.items];
    const index = comics.indexOf(this.getItembyId(id));
    const item = comics[index];
    if (item.count > 1) {
      item.count -= 1;
      this.setState(() => {
        return {
          cart: [
            ...this.state.cart.filter(
              (item, index) => this.state.cart.indexOf(item) === index
            ),
            item,
          ],
        };
      });
      this.countTotalPrice();
    }
  };

  // Method handle increment count of quantity of item added to cart
  incrementCount = (id) => {
    let comics = [...this.state.cart];
    const index = comics.indexOf(this.getItembyId(id));
    const item = comics[index];

    if (item.count < 10) {
      item.count += 1;
      this.setState(() => {
        return {
          cart: [
            ...this.state.cart.filter(
              (item, index) => this.state.cart.indexOf(item) === index
            ),
            item,
          ],
        };
      });
      this.countTotalPrice();
    }
  };

  // Method handle remove Item from cart
  removeItemFromCart = (id) => {
    this.setState(
      () => {
        return {
          cart: this.state.cart.filter((item) => item.id !== id),
        };
      },
      () => {
        this.countTotalPrice();
      }
    );
  };

  // Method handle adding item to cart
  handleAddtoCart = (id) => {
    let comics = [...this.state.items];
    const index = comics.indexOf(this.getItembyId(id));
    const item = comics[index];
    if (item.count === undefined) {
      item.count = 1;
    } else if (item.count < 10) {
      item.count += 1;
    }
    this.setState(
      () => {
        return {
          items: comics,
          cart: [
            ...this.state.cart.filter(
              (item, index) => this.state.cart.indexOf(item) === index
            ),
            item,
          ],
        };
      },
      () => {
        this.countTotalPrice();
      }
    );
    this.flashAlert();
  };

  // Handle resetting cart items
  handleClearCart = (e) => {
    this.setState(() => {
      return {
        cart: [],
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.state.messageAlert ? <Alert /> : null}
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
        <Footer
          props={this.state.attributionHTML}
          scrollToTop={this.scrollToTop}
        />
      </React.Fragment>
    );
  }
}

export default App;
