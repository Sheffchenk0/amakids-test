import React from 'react';
import finishSVG from '../assets/images/svg/finish.svg';

function Finish() {
  return <img className="finishSVG unselectable" src={finishSVG} alt="finish" />;
}

export default React.memo(Finish);
