import React from 'react';
import arrowSVG from '../assets/images/svg/arrow.svg';

function arrow() {
  return <img className="arrow" src={arrowSVG} alt="arrow" />;
}

export default React.memo(arrow);
