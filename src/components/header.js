import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Home from "./home";
import About from "./about";
import ProductMain from "./product-main";
import "../css/header.css";

export default class AppHeader extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1><span className="title-logo">ACME</span> Device Company</h1>
                    <nav>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/checkout">[Cart]</Link></li>
                            <li><Link to="/login">[Login/Signout]</Link></li>
                        </ul>
                    </nav>
                </header>
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/products" component={ProductMain} />
            </div>
        )
    }
}
