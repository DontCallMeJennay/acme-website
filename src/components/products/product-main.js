import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SearchPanel from './search-panel';
import SearchResults from './search-results';
import '../../css/products.css';

export default class ProductMain extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <h2>Mail Order Mayhem</h2>
                <h3>What are you looking for today?</h3>
                <div className="product-nav">
                    <ul>
                        <li><Link to="">Food and Medicine</Link></li>
                        <li><Link to="">Home and Garden</Link></li>
                        <li><Link to="">Hardware and DIY Kits</Link></li>
                        <li><Link to="">Earth-Shattering Kabooms</Link></li>
                    </ul>
                </div>

                <SearchPanel />
    
                <div className="search-results">
                    <Route path="/results" component={SearchResults}></Route>
                </div>
            </div>
            </Router>
        )
    }
}