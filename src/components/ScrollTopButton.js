import React from 'react';
import ScrollTop from 'react-scrolltop-button';
import JetpackOn from '../svg/JetpackOn';

const ScrollTopButton = ({ distance = 700 } = {}) => {
  return (
    <ScrollTop
      text=""
      distance={distance}
      breakpoint={50000}
      speed={500}
      style={{
        boxShadow: `1px 1px 3px rgba(0,0,0,0.5)`,
        border: `none`,
        borderRadius: `3px`,
        backgroundColor: 'transparent',
        width: '70px',
        padding: `10px 15px`
      }}
      icon={<JetpackOn />}
    />
  );
};

export default ScrollTopButton;
