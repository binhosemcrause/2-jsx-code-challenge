//Import React
import React from 'react';
import ReactDOM from 'react-dom/client';

//You first create  the root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Create a element
const element = (
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>Jamon</li>
    </ul>
  </div>
);

//Render the HTML element on the root
root.render(element);



//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

