import './App.css';
import React, {Fragment} from 'react';
import Header from './component/Header'
import Product from './component/Product'
import NewProduct from './component/NewProduct'
import EditProduct from './component/EditProduct'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>

      <div className="container">
         <Switch>
           <Route exact path="/" component={Product}/>
           <Route exact path="/product/new-product" component={NewProduct}/>
           <Route exact path="/product/edit-product/:id" component={EditProduct}/>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
