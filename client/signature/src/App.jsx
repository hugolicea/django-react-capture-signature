import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SaveSignature from "./components/SaveSignature";
import ConsultSignature from "./components/ConsultSignature";

import "./components/SignatureComponent.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/save">Save Signature</Link>
            </li>
            <li>
              <Link to="/consult">Consult Signature</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/save" element={<SaveSignature />} />
          <Route path="/consult" element={<ConsultSignature />} />
          <Route path="/" element={<h1>Welcome to the Signature App</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
