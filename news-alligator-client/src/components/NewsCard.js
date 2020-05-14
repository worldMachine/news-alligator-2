import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import NewsArticle from "./NewsArticle";
import "./NewsCard.css";

const NewsCard = (props) => {
  const { classes, item, setOpen, isOpen, setItem } = props;

  const newsCardClicked = () => {
    setItem(item);
    setOpen(true);
  };

  return (
    <div
      className="news-card"
      onClick={() => newsCardClicked()}
      aria-controls="example-collapse-text"
    >
      <p className="card-title">{item.title}</p>
      <p className="card-publisher">{item.publisher}</p>
      <div className="card-img-frame">
        <img className="card-img" src={item.imageLink} />
      </div>
    </div>
  );
};

export default NewsCard;
