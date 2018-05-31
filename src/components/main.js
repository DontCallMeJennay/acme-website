import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../css/main.css";

import Home from "./home";
import About from "./about";
import ProductMain from "./products/product-main";
import Checkout from "./checkout";
import Contact from "./contact";
import Login from "./login";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/products" component={ProductMain} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
            </main>
        )
    }
}
