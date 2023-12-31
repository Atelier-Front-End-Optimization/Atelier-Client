/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

const ItemDescription = ({ description, slogan }) => {
  return (
    <>
      <h2 id="description">{slogan}</h2>
      <p>{description}</p>
    </>
  );
};

export default ItemDescription;
