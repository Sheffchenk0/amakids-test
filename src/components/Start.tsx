import React from 'react';
import startSVG from '../assets/images/svg/start.svg';

function Start() {
  return <img className="startSVG unselectable" src={startSVG} alt="start" />;
}

export default React.memo(Start);
