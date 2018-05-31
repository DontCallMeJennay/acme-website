import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';     
import Home from "./home";
import About from "./about";
import ProductMain from "./product-main";
                    
export default class Main extends React.Component {
    render() {
        return (
                    <main>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/products" component={ProductMain} />
                    </main>
        )
    }
}
