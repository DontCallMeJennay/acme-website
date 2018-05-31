import React, { Component } from 'react';
"use strict;"

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <main>
          <div className="about">
            <div>
              <p>
                For over 65 years, ACME Company has... Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo! Meh. We're also Santa Claus! That's a popular name today. Little "e", big "B"?
                And remember, don't do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don't not do it! Oh dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for you.
                Why am I sticky and naked? Did I miss something fun? Hey! I'm a porno-dealing monster, what do I care what you think? What's with you kids? Every other day it's food, food, food. Alright, I'll get you some stupid food.
                We can't compete with Mom! Her company is big and evil! Ours is small and neutral! Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor.
              </p>
              <img src="/img/whatnowending.jpg" alt="Wile E. Coyote with sign saying 'What do I do now?'" />
            </div>
          </div>
          <div className="home">
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
          </div>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
