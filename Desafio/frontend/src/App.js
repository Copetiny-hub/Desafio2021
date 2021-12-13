import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Usuarios} from './components/Usuarios'
import {Navbar} from './components/Navbar'




function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container p-4">
        <Routes>
          <Route path="/" element = {<Usuarios/>} />
        </Routes>
      </div>
    </Router>
  
  );
}


export default App;
