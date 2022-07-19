import React from 'react';
import { GameSettings } from '../enum';

function Cols() {
  return (
    <div className="game__cols">
      {Array.from({ length: GameSettings.COLS }).map((el, i) => (
        <div
          key={i}
          style={{ width: `calc(${100 / GameSettings.COLS}% - 4px)` }}
          className="game__col">
          {cols[i]}
        </div>
      ))}
    </div>
  );
}

export default React.memo(Cols);

const cols = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'G',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
