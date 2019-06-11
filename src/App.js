import React from 'react';
import './App.css';
import WebChat from './components/WebChat/WebChat';
import IphoneWrapper from './components/IphoneWrapper/IphoneWrapper';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <IphoneWrapper>
          <WebChat />
        </IphoneWrapper>
      </header>
    </div>
  );
}

export default App;
