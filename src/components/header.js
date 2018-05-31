import React from 'react';
import "../css/header.css";

export default class AppHeader extends React.Component {
    render() {
        return (
            <header>
                <h1><span className="title-logo">ACME</span> Device Company</h1>
                <nav>
                    <ul>
                        <li><a>About Us</a></li>
                        <li><a>Products</a></li>
                        <li><a>Contact</a></li>
                        <li><a>[Cart]</a></li>
                        <li><a>[Login/Signout]</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
