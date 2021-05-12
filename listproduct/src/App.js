import './App.css';
import React from 'react';
import Header from './component/Header'
import Product from './component/Product'
import NewProduct from './component/NewProduct'
import EditProduct from './component/EditProduct'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import {Provider} from 'react-redux';
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>

        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Product}/>
            <Route exact path="/product/new-product" component={NewProduct}/>
            <Route exact path="/product/edit-product/:id" component={EditProduct}/>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
