import React from 'react';
import ScrollTop from './ScrollTop';
import hovering from '../svg/hovering.svg';
import lit from '../svg/onclick.svg';
import PacmanGIF from "../svg/pacmanScrollUp.gif"
import PacmanWait from "../svg/pacmanReady.png"

const ScrollTopButton = ({ distance = 700 } = {}) => {
  return (
    <ScrollTop
      text=""
      distance={distance}
      breakpoint={50000}
      speed={1000}
      bottomOffset={200}
      litSrc={PacmanGIF}
      hoveringSrc={PacmanWait}
      style={{ border: `none`, padding: 0, backgroundColor: 'transparent', position: 'fixed', bottom: '20px', right: '20px', zIndex: '9999' }}
    />
  );
};

export default ScrollTopButton;
