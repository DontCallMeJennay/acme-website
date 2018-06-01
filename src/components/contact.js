import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SearchPanel from './search-panel';
import SearchResults from './search-results';

export default class Contact extends React.Component {
    render() {
        return(
            <div>
                <h2>This is the Contact Us component!</h2>
                <p>It will include physical contact information, a written comment form, and a "self-help" option with drop-down menus.</p>
                <p>Tab 1: Contact information: mailing address, phone number, email, etc.</p>
                <p>Tab 2: Automated </p>
                <p>Tab 3: Contact form with name, email or phone, and textbox</p>
            </div>
        )
    }
}