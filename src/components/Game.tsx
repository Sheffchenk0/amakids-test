import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { GameSettings, GameStatuses } from '../enum';
import { generateGame } from './../helpers/index';

import Reload from './Reload';
import Start from './Start';
import Finish from './Finish';
import Cols from './Cols';
import Play from './Play';
import Rows from './Rows';
import Pad from './Pad';

interface IGameParams {
  pads: Array<number>;
  startItemId: Number | null;
  endItemId: Number | null;
  wrongItemId: Number | null;
}

function Game() {
  const [height, setHeight] = useState(0);
  const [gameStatus, setGameStatus] = useState(GameStatuses.NOT_STARTED);
  const [timeoutHandler, setTimeoutHandler] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [gameParams, setGameParams] = useState<IGameParams>({
    pads: Array.from({ length: GameSettings.PUDS }),
    startItemId: null,
    endItemId: null,
    wrongItemId: null,
  });

  const itemsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    function updateSize() {
      if (itemsRef.current?.children) {
        for (let index = 0; index < itemsRef.current?.children.length; index++) {
          const element = itemsRef.current?.children[index];
          setHeight(element.clientWidth);
        }
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (gameStatus === GameStatuses.STARTED) {
      const timeoutHandler = setTimeout(() => {
        setGameStatus((gameStatus) => {
          if (gameStatus === GameStatuses.STARTED) {
            return GameStatuses.READY_TO_PICK;
          } else {
            return gameStatus;
          }
        });
      }, GameSettings.PUDS * GameSettings.PUDS_SPEED);
      setTimeoutHandler(timeoutHandler);
    }
    return () => {
      if (timeoutHandler) {
        clearTimeout(timeoutHandler);
      }
    };
  }, [gameStatus]);

  const play = () => {
    setGameStatus(GameStatuses.STARTED);
    const { answer, startItemId, stepsResult } = generateGame(GameSettings.COLS, GameSettings.PUDS);
    setGameParams((prevState) => {
      return { ...prevState, startItemId, endItemId: answer, pads: stepsResult };
    });
  };

  const restart = () => {
    setGameParams((prevState) => {
      return {
        ...prevState,
        pads: Array.from({ length: GameSettings.PUDS }),
        startItemId: null,
        endItemId: null,
        wrongItemId: null,
      };
    });
    setGameStatus(GameStatuses.NOT_STARTED);
    setTimeoutHandler(null);
    if (timeoutHandler) {
      clearTimeout(timeoutHandler);
    }
  };

  const onItemClick = (id: number) => {
    if (gameStatus === GameStatuses.READY_TO_PICK) {
      if (id !== gameParams.endItemId) {
        setGameParams((prevState) => {
          return { ...prevState, wrongItemId: id };
        });
      }
      setGameStatus(GameStatuses.ENDED);
    }
  };

  return (
    <>
      <div className="container">
        <div className="game">
          <Cols />
          <Rows />
          <div ref={itemsRef} className="game__items">
            {Array.from({ length: GameSettings.COLS ** 2 }).map((el, i) => (
              <div
                key={i}
                onClick={() => onItemClick(i)}
                className={classNames('game__item', {
                  'game__item--ready': gameStatus === GameStatuses.READY_TO_PICK,
                  'game__item--end':
                    gameParams.endItemId === i && gameStatus === GameStatuses.ENDED,
                  'game__item--wrong':
                    gameParams.wrongItemId === i && gameStatus === GameStatuses.ENDED,
                })}
                style={{ width: `calc(${100 / GameSettings.COLS}% - 4px)`, height }}>
                {gameParams.startItemId === i && <Start />}
                {gameParams.endItemId === i && gameStatus === GameStatuses.ENDED && <Finish />}
              </div>
            ))}
          </div>
        </div>
        <div className="pads">
          {gameParams.pads.map((el, i) => (
            <Pad key={i} pad={el} index={i} />
          ))}
        </div>
        {gameStatus === GameStatuses.NOT_STARTED && (
          <div className="play" onClick={() => play()}>
            <Play />
          </div>
        )}
        {gameStatus === GameStatuses.NOT_STARTED && <Play />}
        {(gameStatus === GameStatuses.STARTED ||
          gameStatus === GameStatuses.READY_TO_PICK ||
          gameStatus === GameStatuses.ENDED) && (
          <div className="restart" onClick={() => restart()}>
            <Reload />
          </div>
        )}
      </div>
    </>
  );
}

export default Game;
