import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  const style = { backgroundImage: `url(${imageUrl})` };

  return (
    <div className={`${size} menu-item`}>
      <div style={style} className="background-image" />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;