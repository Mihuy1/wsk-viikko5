import React from 'react';
import PropTypes from 'prop-types';

const Upload = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Tiedostoa yritetään lähettää');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="tiedosto"></input>
      <button type="submit">Upload</button>
    </form>
  );
};

Upload.propTypes = {};

export default Upload;
