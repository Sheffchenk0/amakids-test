import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { GameSettings, Ways } from '../enum';
import Arrow from './Arrow';

interface IPad {
  pad: number;
  index: number;
}

function Pad({ pad, index }: IPad) {
  const [way, setWay] = useState<number | null>(null);
  useEffect(() => {
    if (!pad) {
      setWay(null);
    }
    const timeout = setTimeout(() => {
      if (pad) {
        setWay(pad);
      }
    }, GameSettings.PUDS_SPEED * (index + 1));
    return () => {
      clearTimeout(timeout);
    };
  }, [pad, index]);

  return (
    <div className="pad">
      <div
        className={classNames('pad__icon', {
          'arrow--left': Ways.LEFT === way,
          'arrow--right': Ways.RIGHT === way,
          'arrow--top': Ways.TOP === way,
          'arrow--bottom': Ways.BOTTOM === way,
        })}>
        {way && <Arrow />}
      </div>
    </div>
  );
}

export default React.memo(Pad);
