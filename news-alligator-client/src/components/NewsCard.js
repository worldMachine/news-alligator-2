import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import NewsArticle from "./NewsArticle";
import "./NewsCard.css";
import moment from "moment";

const NewsCard = (props) => {
  const { classes, item, setOpen, isOpen, setItem } = props;

  let prettyDate = "";
  let today = Date.now();
  if (moment(item.pubDate).isSame(today, "day")) {
    prettyDate += "Today, ";
  } // false

  prettyDate += moment(item.pubDate).format("MMM Do  h:mm a");

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
      <p className="card-date">{prettyDate}</p>
      <div className="card-img-frame">
        <img className="card-img" src={item.imageLink} />
      </div>
    </div>
  );
};

export default NewsCard;
