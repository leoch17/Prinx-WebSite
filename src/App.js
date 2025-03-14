import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Productsv2 from './components/pages/Productsv2';
import Contact from './components/pages/Contact';
import History from './components/pages/History';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Productsv2} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/history' exact component={History} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
