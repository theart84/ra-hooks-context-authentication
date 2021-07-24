import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../../store/authContext";
import NewsItem from "./NewsItem/NewsItem";

const NewsLists = () => {
  const ctx = useContext(AuthContext)
  useEffect(() => {
    ctx.getNews()
  }, [])
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {ctx.news.map(item => (
        <NewsItem
          key={item.id}
          title={item.title}
          imageURL={item.image}
          content={item.content}
        />
        ))
      }
    </div>
  );
};

export default NewsLists;
