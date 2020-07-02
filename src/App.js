import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import "./App.css";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfugureStore } from "./redux/configureStore";

const store = ConfugureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
