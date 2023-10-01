import React from 'react';
import '../styles/App.css';

const TypesOfFruit = () => {
  return (
    <div id="typesOfFruits">
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
      {/* Print the Fruits component inside TypesOfFruit */}
      <Fruits />
    </div>
  );
};

const Fruits = () => {
  return (
    <div id="fruits">
      {/* Print the TypesOfFruit component inside Fruits */}
      <TypesOfFruit />
    </div>
  );
};

const App = () => {
  return (
    <div id="main">
      <h1>Types of Food:</h1>
      {/* Print the TypesOfFruit and Fruits components inside App */}
      <TypesOfFruit />
      <Fruits />
    </div>
  );
};

export default App;
