import React from 'react';
import "../css/about.css";

export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div>
                    <p>
                        For over 65 years, ACME Company has delivered the finest in zany cartoon violence. Our catalog includes timeless classics like TNT,
                        exotic substances such as Earthquake Pills, and even world-class devices like the Illudium Q-36 Space Modulator. Whether you want to capture wild life or
                        dominate the world, we have just the right tools!
              </p>
                    <p>
                        All sales final. Sold as-is without warranty. Batteries not included. Use at your own risk. Eat at Joes.
              </p>
                </div>
                <img src="/img/whatnowpic.jpg" alt="Wile E. Coyote with sign saying 'What do I do now?'" />
            </div>
        )
    }
}

