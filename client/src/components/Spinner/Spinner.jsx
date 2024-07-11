import React from 'react';
import './Spinner.css';

export const Spinner = () => {
  return (
    <div className="loadingSpinnerContainer">
      <img src="/img/ant.gif" alt="loading" className="loadingAnt" />
    </div>
  );
};


