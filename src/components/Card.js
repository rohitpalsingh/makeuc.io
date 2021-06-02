import React from 'react';

const Card = ({ className, children, style = {} }) => (
  <div
    className={`p-12 border border-solid ${className}`}
    style={{
      borderColor: '#8174ff',
      boxShadow: '0 10px 28px rgba(0,0,0,.08)',
      ...style
    }}
  >
    {children}
  </div>
);

export default Card;
