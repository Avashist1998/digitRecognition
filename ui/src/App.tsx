import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      
      <Link to="/"><Home /></Link> 
      <Link to="/expenses">Expenses</Link>
    </BrowserRouter>
  );
}

export default App;
