import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import BeforeAfter from './components/pages/BeforeAfter';
import Services from './components/pages/Services';
import Login from './components/pages/Login';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/beforeafter' component={BeforeAfter} />
        <Route path='/services' component={Services} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
