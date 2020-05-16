import React, { useState, useEffect } from "react";

import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import useNewsService from "../services/useNewsService";
import "./News.css";
import NewsArticle from "./NewsArticle";
import NewsCard from "./NewsCard";

function News(props) {
  const { colNum, textImagePref } = props;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState("");
  const [articlesPage, setArticlesPage] = useState(0);

  const retrieveArticles = (pageNum) => {
    useNewsService
      .getArticles(pageNum)
      .then((response) => {
        let newItems = items.concat(response.data);
        setItems(newItems);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
  };

  useEffect(() => {
    retrieveArticles(0);
  }, []);

  // useEffect(() => {
  //   retrieveArticles(articlesPage);
  // }, [articlesPage]);

  useEffect(() => {
    setIsLoaded(true);
  }, [items]);

  // useEffect(() => {
  //   console.log("colnum has changed: ", colNum);
  // }, [colNum]);

  // useEffect(() => {
  //   console.log("open", open);
  // }, [open]);

  const loadNextPage = () => {
    let newPage = articlesPage + 1;
    setArticlesPage(newPage);
    retrieveArticles(newPage);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <NewsArticle
          showArticle={open}
          item={item}
          setOpen={setOpen}
          isOpen={open}
        />
        <div
          className={
            open
              ? "container news-container article-margin"
              : "container news-container no-margin"
          }
        >
          <div className="row">
            {items.map((item) => (
              // 12-single, 6-double, 4-triple, 3-quad,
              // <Col xs={12} sm={12} md={6} lg={4}>
              <Col xs={colNum} key={item._id}>
                <NewsCard
                  item={item}
                  setOpen={setOpen}
                  isOpen={open}
                  setItem={setItem}
                  textImagePref={textImagePref}
                />
              </Col>
            ))}
            <button
              className="btn btn-dark load-more-btn no-bs-border"
              onClick={() => loadNextPage()}
            >
              Load More
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
