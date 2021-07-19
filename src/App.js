import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import storage from "./redux/store";

import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";

import Login from "./pages/auth/Login/Login";
import BasicReact from "./pages/learning/BasicReact/BasicReact";
import BasicHome from "./pages/learning/Home/Home";
import BasicMovieDetail from "./pages/learning/MovieDetail/MovieDetail";
import BasicRedux from "./pages/learning/BasicRedux/BasicRedux";

import { PersistGate } from "redux-persist/integration/react";
const { store, persistor } = storage;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Switch>
              <PublicRoute
                restricted={true}
                path="/login"
                exact
                component={Login}
              />
              <PublicRoute
                path="/learning/basic-react"
                exact
                component={BasicReact}
              />
              <PrivateRoute
                path="/learning/basic-home"
                exact
                component={BasicHome}
              />
              <Route
                path="/learning/basic-movie-detail/:id"
                exact
                component={BasicMovieDetail}
              />
              <Route
                path="/learning/basic-redux"
                exact
                component={BasicRedux}
              />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
      // {/* ================= */}
    );
  }
}

export default App;
