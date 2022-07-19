import React from 'react';
import './App.scss';
import Game from './components/Game';

function App() {
  return (
    <>
      <div className="header">
        <div className="header__logo">Лабиринт</div>
      </div>
      <Game />
    </>
  );
}

export default App;
