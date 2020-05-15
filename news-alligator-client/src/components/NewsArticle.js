import React, { useState, useEffect, useRef } from "react";
import "./NewsArticle.css";
import moment from "moment";
// import { Collapse, Fade, Button } from "react-bootstrap";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const NewsArticle = (props) => {
  const myRef = useRef(null);
  const { showArticle, item, setOpen, isOpen } = props;

  const [articleBody, setArticleBody] = useState(item.body);

  useEffect(() => {
    if (item.body) cleanArticleBody();
    // scrollToRef(myRef);
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
            className="close article-close no-bs-border"
            aria-label="Close"
            onClick={() => closeCardClicked()}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="outer-article">
            <div className="body-container">
              <h1 className="article-title" ref={myRef}>
                {item.title}
              </h1>

              <div className="card-img-frame">
                <img className="card-img" src={item.imageLink} />
              </div>
              <h2 className="author">
                {item.author ? "Author: " + item.author : ""}
              </h2>
              <h2 className="author na-blue-font">{item.publisher}</h2>
              <p className="author">{prettyDate}</p>
              <a
                className="btn btn-dark custom-btn no-bs-border"
                target="_blank"
                href={item.link}
              >
                Full Article
              </a>
              <p className="text-body">{articleBody}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsArticle;
