import React, { useState, useEffect } from "react";

import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import useNewsService from "../services/useNewsService";
import "./News.css";
import NewsArticle from "./NewsArticle";
import NewsCard from "./NewsCard";

function News(props) {
  const { colNum } = props;

  // const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState("");
  // const [openArticle, setOpenArticle] = useState("closed-article");

  useEffect(() => {
    retrieveArticles();
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, [items]);

  useEffect(() => {
    console.log("colnum has changed: ", colNum);
  }, [colNum]);

  useEffect(() => {
    console.log("open", open);
  }, [open]);

  const retrieveArticles = () => {
    useNewsService
      .getArticles()
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
  };
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    // const classes = useStyles();

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
              <Col xs={colNum}>
                <NewsCard
                  item={item}
                  setOpen={setOpen}
                  isOpen={open}
                  setItem={setItem}
                />
              </Col>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
