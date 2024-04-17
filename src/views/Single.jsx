import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Single = (props) => {
  const {state} = useLocation();
  const item = state.item;
  const navigate = useNavigate();
  return (
    <div>
      <h2>{item && item.title}</h2>
      {item && item.media_type === 'image/jpeg' ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video controls>
          <source src={item && item.filename} type={item && item.media_type} />
        </video>
      )}
      <p>{item && item.description}</p>
      <p>Created at: {item && item.created_at} </p>
      <p>File size: {item && item.filesize} </p>
      <p>Type: {item && item.media_type} </p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

Single.propTypes = {};

export default Single;
