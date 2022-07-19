import React from 'react';
import reloadSVG from '../assets/images/svg/reload.svg';

function Reload() {
  return <img className="reloadSVG unselectable" src={reloadSVG} alt="reload" />;
}

export default React.memo(Reload);
