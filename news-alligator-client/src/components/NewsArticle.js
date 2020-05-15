import React, { useState, useEffect, useRef } from "react";
import "./NewsArticle.css";
import "./theme.css";
import moment from "moment";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const NewsArticle = (props) => {
  const myRef = useRef(null);
  const { showArticle, item, setOpen, isOpen } = props;

  const [articleBody, setArticleBody] = useState(item.body);

  useEffect(() => {
    const cleanArticleBody = () => {
      let newBody = item.body.toString().replace(/(\[.*?\])/g, "");

      // console.log(item.body);
      // console.log(newBody);

      setArticleBody(newBody);
    };
    if (item.body) cleanArticleBody();
    // scrollToRef(myRef);
  }, [item]);

  const closeCardClicked = () => {
    setOpen(!isOpen);
  };

  // default img src on img error
  const addDefaultSrc = (ev) => {
    ev.target.src =
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
  };

  const prettyDate = moment(item.pubDate).format("MMM Do  h:mm a");

  // console.log("showArticle is ", showArticle);
  return (
    <React.Fragment>
      <div className=" ">
        <div
          className={
            showArticle
              ? "article-container dark-card-bg-color dark-font-color open-width"
              : "article-container dark-card-bg-color dark-font-color collapsed-width"
          }
        >
          <button
            type="button"
            className="close article-close dark-font-color no-bs-border"
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
                <img
                  className="card-img"
                  alt={"article image " + item.publisher}
                  src={item.imageLink}
                  onError={addDefaultSrc}
                />
              </div>
              <h2 className="author">
                {item.author ? "Author: " + item.author : ""}
              </h2>
              <h2 className="author na-blue-font">{item.publisher}</h2>
              <p className="author">{prettyDate}</p>
              <a
                className="btn btn-dark custom-btn no-bs-border"
                target="_blank"
                rel="noopener noreferrer"
                href={item.link.toString()}
              >
                Full Article
              </a>
              <p className="text-body dark-font-color">{articleBody}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsArticle;
