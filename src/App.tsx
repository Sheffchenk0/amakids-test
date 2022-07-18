import React from 'react';
import './App.scss';
import Arrow from './components/Arrow';

function App() {
  return (
    <>
      <div className="header">
        <div className="header__logo">Лабиринт</div>
      </div>
      <div className="game">
        <div className="game__rows">
          <div className="game__row">1</div>
          <div className="game__row">2</div>
          <div className="game__row">3</div>
        </div>
        <div className="game__col">
          <div className="game__head">A</div>
          <div className="game__item"></div>
          <div className="game__item"></div>
          <div className="game__item"></div>
        </div>
        <div className="game__col">
          <div className="game__head">B</div>
          <div className="game__item"></div>
          <div className="game__item"></div>
          <div className="game__item"></div>
        </div>
        <div className="game__col">
          <div className="game__head">C</div>
          <div className="game__item"></div>
          <div className="game__item"></div>
          <div className="game__item"></div>
        </div>
      </div>
      <div className="pads">
        <div className="pad">
          <div className="pad__icon">
            <Arrow />
          </div>
        </div>
        <div className="pad"></div>
        <div className="pad"></div>
        <div className="pad"></div>
        <div className="pad"></div>
        <div className="pad"></div>
        <div className="pad"></div>
        <div className="pad"></div>
        <div className="pad"></div>
        <div className="pad"></div>
      </div>
    </>
  );
}

export default App;
