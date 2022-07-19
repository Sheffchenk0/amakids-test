import React from 'react';
import { GameSettings } from '../enum';

function Rows() {
  return (
    <div className="game__rows">
      {Array.from({ length: GameSettings.COLS }).map((el, i) => (
        <div
          key={i}
          style={{ height: `calc(${100 / GameSettings.COLS}% - 4px)` }}
          className="game__row">
          {i}
        </div>
      ))}
    </div>
  );
}

export default React.memo(Rows);
