import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./NewsCard.css";
import moment from "moment";

const NewsCard = (props) => {
  const { item, setOpen, setItem, textImagePref } = props;

  let prettyDate = "";
  let today = Date.now();
  if (moment(item.pubDate).isSame(today, "day")) {
    prettyDate += "Today, ";
  }

  prettyDate += moment(item.pubDate).format("MMM Do  h:mm a");

  const newsCardClicked = () => {
    setItem(item);
    setOpen(true);
  };

  // default img src on img error
  const addDefaultSrc = (ev) => {
    ev.target.src =
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
  };

  console.log("showImage is: " + textImagePref);
  const showImage = textImagePref ? "" : " hide-img";

  return (
    <div
      className="news-card"
      onClick={() => newsCardClicked()}
      aria-controls="example-collapse-text"
    >
      <p className="card-title">{item.title}</p>
      <p className="card-publisher na-blue-font">{item.publisher}</p>
      <p className="card-date">{prettyDate}</p>
      <div className="card-img-frame">
        <img
          className={"card-img " + showImage}
          alt={"card image " + item.publisher}
          onError={addDefaultSrc}
          src={item.imageLink}
        />
      </div>
    </div>
  );
};

export default NewsCard;
