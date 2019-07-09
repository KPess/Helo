import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Auth from "./Components/Auth";
import Dashboard from "./Components/Dashboard";
import Form from "./Components/Form";
import Nav from "./Components/Nav";
import Post from "./Components/Post";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes"
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">{routes}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <Auth />
              <Dashboard />
              <Form />
              <Nav />
              <Post />
            </p>
          </header>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
