import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={url} width='150px' alt={title} />
      <br />
      <p>
        <b>{title}</b> <br/> <small>{id}</small>
      </p>
    </div>
  );
};
