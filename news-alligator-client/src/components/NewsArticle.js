import React from "react";
import "./NewsArticle.css";
// import { Collapse, Fade, Button } from "react-bootstrap";

const NewsArticle = (props) => {
  const { showArticle, item, setOpen, isOpen } = props;

  const closeCardClicked = () => {
    // setItem(item);
    setOpen(!isOpen);
  };

  console.log("showArticle is ", showArticle);
  return (
    <React.Fragment>
      <div className="outer-article">
        <div
          className={
            showArticle
              ? "article-container open-width"
              : "article-container collapsed-width"
          }
        >
          <button
            type="button"
            className="close article-close"
            aria-label="Close"
            onClick={() => closeCardClicked()}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h1 className="article-title">{item.title}</h1>
          <div className="card-img-frame">
            <img className="card-img" src={item.imageLink} />
          </div>
          <p className="article-body">{item.body}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsArticle;
