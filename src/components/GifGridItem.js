import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className='card'>
      <img src={url} width='150px' alt={title} />
      <br />
      <p>
        <b>{title}</b> <br/> <small>{id}</small>
      </p>
    </div>
  );
};
