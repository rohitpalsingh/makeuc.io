import React, { useState } from 'react';
import ScrollTop from 'react-scrolltop-button';
import hovering from '../svg/hovering.svg';
import lit from '../svg/onclick.svg';

const ScrollTopIcon = () => {
  const [ flying, setFlying ] = useState(false);

  return <div
    className="scroll-top-icon"
    onClick={() => setFlying(true)}
    style={{
      boxShadow: `0px 0px 0px rgba(0,0,0,0.5)`,
      borderRadius: `3px`,
      width: '60px',
      padding: `10px 15px`
    }}
  ><img src={flying ? lit : hovering} /></div>;
};

const ScrollTopButton = ({ distance = 700 } = {}) => {
  return (
    <ScrollTop
      text=""
      distance={distance}
      breakpoint={50000}
      speed={1000}
      icon={<ScrollTopIcon />}
      style={{ border: `none`, padding: 0, backgroundColor: 'transparent' }}
    />
  );
};

export default ScrollTopButton;
