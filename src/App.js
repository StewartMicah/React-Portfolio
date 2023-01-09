import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
          path='/'
          element={<div><About /><Portfolio /><Contact /></div>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
