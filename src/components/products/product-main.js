import React from 'react';
export default class ProductMain extends React.Component {
    render() {
        return (
            <div>
                <h2>Mail Order Mayhem</h2>
                <h3>What are you looking for today?</h3>
                <ul>
                    <li><a>Food and Medicine</a></li>
                    <li><a>DIY Gadgets</a></li>
                    <li><a>Vehicles</a></li>
                    <li><a>Earth-shattering Kabooms</a></li>
                </ul>
            </div>
        )
    }
}