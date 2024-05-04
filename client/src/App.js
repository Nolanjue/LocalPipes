import Home from "./pages/HomePage/Home";
import React from 'react';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' exact element = {<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
