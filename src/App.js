import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Nav';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';



import './App.css'



function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
