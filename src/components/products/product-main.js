import React from 'react';
import ReactForms from 'react-forms';
export default class ProductMain extends React.Component {
    render() {
        return (
            <div>
                <h2>Mail Order Mayhem</h2>
                <h3>What are you looking for today?</h3>
                <div className="product-nav">
                    <ul>
                        <li><a>Food and Medicine</a></li>
                        <li><a>DIY Gadgets</a></li>
                        <li><a>Vehicles</a></li>
                        <li><a>Earth-shattering Kabooms</a></li>
                    </ul>
                </div>
                <div className="search-panel">
                    // Keyword search bar with submit button
                    // Search by 
                </div>
                <div className="search-results">
                    // Display images that link to detailed views                    
                </div>
            </div>
        )
    }
}