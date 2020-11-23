import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((categories) => {
      if (!categories.includes(inputValue) && inputValue.trim()) {
        setInputValue('');
        return [inputValue,...categories];
      } else {
        console.error('El elemento ya existe en el arreglo o está vacío');
        return categories;
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
