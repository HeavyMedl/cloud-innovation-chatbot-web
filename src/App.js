import React from 'react';
import './App.css';
// import WebChat from './components/WebChat/WebChat';
// import IphoneWrapper from './components/IphoneWrapper/IphoneWrapper';
import Home from './components/Home/Home';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      <Home />
    </>
  );
}

// <div className='App'>
// <header className='App-header'>
//   <IphoneWrapper>
//     // <WebChat />
//   </IphoneWrapper>
// </header>
// </div>

export default App;
