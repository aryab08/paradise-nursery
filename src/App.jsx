import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your destination for
            beautiful and healthy houseplants.
          </p>

          <Link to="/plants">
            <button className="get-started-btn">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
