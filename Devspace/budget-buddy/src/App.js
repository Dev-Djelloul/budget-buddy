import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Statistics from "./pages/Statistics";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Assurez-vous que ce chemin est correct pour `index.css`

function App() {
  return (
    <Router>
      <div
        className="container text-center mt-4 p-4 rounded container-background"
      >
        <h1>💰 Budget Buddy 💰</h1>
        <nav>
          <div className="nav justify-content-center mb-4">
            <Link
              className="nav-link text-light"
              to="/"
              style={{ textDecoration: "none" }}
            >
              <span style={{ fontSize: "1.5rem" }}>Home</span>
            </Link>
            <Link
              className="nav-link text-light"
              to="/transactions"
              style={{ textDecoration: "none" }}
            >
              <span style={{ fontSize: "1.5rem" }}>Transactions</span>
            </Link>
            <Link
              className="nav-link text-light"
              to="/statistics"
              style={{ textDecoration: "none" }}
            >
              <span style={{ fontSize: "1.5rem" }}>Statistics</span>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
