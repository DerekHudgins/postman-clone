import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './styles/Response.css';

const Response = ({ response }) => {
  return (
    <>
      <ReactJson className={styles.response} crossorigin src={response} />
    </>
  );
};

Response.propTypes = {
  response: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.number,
    })
  ),
};

export default Response;
