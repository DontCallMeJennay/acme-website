import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import "../css/header.css";

export default class AppHeader extends React.Component {
    render() {
        return (
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
        )
    }
}
