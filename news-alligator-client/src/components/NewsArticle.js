import React, { useState, useEffect, useRef } from "react";
import "./NewsArticle.css";
import moment from "moment";
// import { Collapse, Fade, Button } from "react-bootstrap";

const NewsArticle = (props) => {
  const { showArticle, item, setOpen, isOpen } = props;

  const [articleBody, setArticleBody] = useState(item.body);

  useEffect(() => {
    if (item.body) cleanArticleBody();
  }, [item]);

  const closeCardClicked = () => {
    // setItem(item);
    setOpen(!isOpen);
  };

  const cleanArticleBody = () => {
    // let newBody = item.body;

    let newBody = item.body.toString().replace(/(\[.*?\])/g, "");

    console.log(item.body);
    console.log(newBody);

    // newBody = <p><;

    setArticleBody(newBody);
  };
  const prettyDate = moment(item.pubDate).format("MMM Do  h:mm a");

  console.log("showArticle is ", showArticle);
  return (
    <React.Fragment>
      <div className=" ">
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
          <div className="outer-article">
            <div className="body-container">
              <h1 className="article-title">{item.title}</h1>

              <div className="card-img-frame">
                <img className="card-img" src={item.imageLink} />
              </div>
              <h2 className="author">
                {item.author ? "Author: " + item.author : ""}
              </h2>
              <h2 className="author">{item.publisher}</h2>
              <p className="author">{prettyDate}</p>
              <div className="">
                <div className="text-body">{articleBody}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsArticle;
