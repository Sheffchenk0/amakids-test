import React from 'react';
import arrowSVG from '../assets/images/svg/arrow.svg';

function Arrow() {
  return <img className="arrowSVG unselectable" src={arrowSVG} alt="arrow" />;
}

export default React.memo(Arrow);
