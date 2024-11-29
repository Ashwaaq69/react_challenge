import React from 'react';
import './exercise.css';
import chefimage from './images/chef1.avif';

const cardImage = (
    <div>
        <p>Front-End Technologies</p>
        <img src={chefimage} alt="Chef" />
        <img src={chefimage} alt="Chef" />
        <img src={chefimage} alt="Chef" />
        {/* <img src={chefimage} alt="Chef" /> */}
       

    </div>
);



const inputFields = (
  <div className="form-container">
    <h1 className="form-title">Subscribe</h1>
    <p className="form-subtitle">Sign up for our newsletter to receive exclusive offers and updates.</p>
    <input className="form-input" type="text" placeholder="Enter your name" />
    <input className="form-input" type="email" placeholder="Enter your email" />
    <input className="form-input" type="password" placeholder="Enter your password" />
    <br />
    <button className="form-button" type="submit">Subscribe</button>
  </div>
);



const usercard = (
  <div className="user-card">
    <img src={chefimage} alt="Chef" />
    <h2>Ashuu mohaz</h2>
    <p>Front-End Developer</p>
    <h2>skills</h2>
    <button>html</button>
    <button>css</button>
    <button>js</button>
    <button>react</button>
    <button>php</button>
    <button>python</button>
    <button>node.js</button>
    <button>mongoDb</button>
    <button>html</button>
    <button>css</button>
    <button>js</button>
    <button>react</button>
    <button>php</button>
    <button>python</button>
    <button>node.js</button>
    <button>mongoDb</button>
  </div>
)



const Exercise = () => (
    <div className="app">
        {cardImage}
        {inputFields}
        {usercard}
      
    </div>
);

export default Exercise;
