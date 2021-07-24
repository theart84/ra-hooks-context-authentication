import React from 'react';

const NewsItem = ({imageURL, title, content}) => {
  return (
    <div className="card mb-5" style={{width: '25rem'}}>
      <img src={imageURL} className="card-img-top" alt="pic"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
    </div>
  );
};

export default NewsItem;
