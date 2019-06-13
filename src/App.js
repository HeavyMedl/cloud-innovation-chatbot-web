import React from 'react';
import './App.css';
import WebChat from './components/WebChat/WebChat';
import IphoneWrapper from './components/IphoneWrapper/IphoneWrapper';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/web' component={WebChat} />
      <Route path='/iphone' component={IphoneWrapper} />
    </Router>
  );
}

export default App;
