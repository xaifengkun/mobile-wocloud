import React from 'react';
import ReactDOM from 'react-dom';
require('./app.css');
function App() {
  return (
    <div className="container">
      <h1>Hello React!</h1>
      <h2>你是谁？</h2>
    </div>
  );
}


const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);