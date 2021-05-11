import './App.css';
import React, {Fragment} from 'react';
import Header from './component/Header'
import Product from './component/Product'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>

      <div className="container">
         <Switch>
           <Route exact path="/" component={Product}/>
           <Route exact path="/product/new-product" component={NewProduct}/>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
