import React from 'react';
import "../css/home.css";

export default class Home extends React.Component {
    render() {
        return (
            <div className="panels">
                <div className="panel manuals">
                    <a><i className="fas fa-8x fa-book"></i>
                    <p>Lost your manual? No problem! Get assembly instructions and video demonstrations here!</p></a>
                </div>
                <div className="panel shop big">
                    <a><i className="fas fa-8x fa-bomb"></i>
                    <p>Browse our selection of fine gizmos, gadgets, and devices!</p></a>
                </div>
                <div className="panel help">
                    <a><i className="far fa-8x fa-question-circle"></i>
                    <p>Need help*? Contact our award-winning support team for advice. <br /> <span className="small">*If this is a life-threatening emergency, please dial 911.</span></p></a>
                </div>
            </div>
        )
    }
}
