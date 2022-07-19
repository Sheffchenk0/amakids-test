import React from 'react';
import playSVG from '../assets/images/svg/play.svg';

function Play() {
  return <img className="playSVG unselectable" src={playSVG} alt="play" />;
}

export default React.memo(Play);
