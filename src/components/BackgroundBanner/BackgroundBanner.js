import React from 'react';

const BackgroundBanner = (props) => {
  return (
      <div className="card text-white bg-secondary mb-3" style={{maxWidth: '50rem', marginRight: 'auto', marginLeft: 'auto'}}>
        <div className="card-body">
          <h1 className="card-title">Neto Social</h1>
          <p className="card-text">FaceBook and VK killer!</p>
        </div>
      </div>
  );
};

export default BackgroundBanner;
