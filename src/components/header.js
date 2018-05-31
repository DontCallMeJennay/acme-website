import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "./home";
import About from "./about";
import ProductMain from "./product-main";
import Main from "./main";
import "../css/header.css";

export default class AppHeader extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <h1><Link to="/" className="title-logo">ACME</Link> Device Company</h1>
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
                    <Main />
                </div>
            </Router>
        )
    }
}
