import React, { FC } from 'react';
import PacmanWait from '../svg/pacmanReady.png';
import PacmanGIF from '../svg/pacmanScrollUp.gif';
import ScrollTop from './ScrollTop';

export type ScrollTopButtonProps = {
  distance?: number;
};

const ScrollTopButton: FC<ScrollTopButtonProps> = ({ distance = 700 }) => (
  <ScrollTop
    text=""
    distance={distance}
    breakpoint={50000}
    speed={1000}
    bottomOffset={200}
    litSrc={PacmanGIF}
    hoveringSrc={PacmanWait}
    style={{
      border: 'none',
      padding: 0,
      backgroundColor: 'transparent',
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: '9999',
    }}
  />
);

export default ScrollTopButton;
