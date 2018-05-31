import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="panel manuals">
                    <a><i className="fas fa-8x fa-book"></i></a>
                    <p>Lost your manual? No problem! Get assembly instructions and video demonstrations here!</p>
                </div>
                <div className="panel shop big">
                    <a><i className="fas fa-8x fa-bomb"></i></a>
                    <p>Browse our selection of fine gizmos, gadgets, and devices!</p>
                </div>
                <div className="panel help">
                    <a><i className="far fa-8x fa-question-circle"></i></a>
                    <p>Need help*? Contact our award-winning support team for advice. <br /> <span className="small">*If this is a life-threatening emergency, please dial 911.</span></p>
                </div>
            </div>
        )
    }
}
