import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Index';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route
          path='/'
          element={<About />}
          />
          <Route
          path='/Portfolio'
          element={<Portfolio />}
          />
          <Route
          path='/Resume'
          element={<Resume />}
          />
          <Route
          path='/Contact'
          element={<Contact />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
