/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import product from '../product';

const Image = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Product" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default Image;
