import React, { useState, useEffect } from "react";

function Listing() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8040cc3829fe453497ac472a132141d8"
        );
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container pt-5">
      <div className="row">
        <h1 className="heading">Latest News</h1>
        <div className="col-md-12 order-md-2 col-lg-12">
          <div className="container-fluid">
            <div className="row">
              {newsData.map((item, index) => (
                <Item key={index} article={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ article }) {
  return (
    <div className="col-12 col-md-12 col-lg-12 mb-3">
      <div className="card h-100 border-0">
        <div className="card-img-top">
          <a
            href={article.url}
            className="font-weight-bold text-dark text-uppercase small"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="listImage"
              src={article.urlToImage}
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="card-body text-center">
          <h4 className="card-title">
            <a
              href={article.url}
              className="font-weight-bold text-dark text-uppercase small"
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </a>
          </h4>
          <h5 className="card-price small text-warning">
            <i>{article.author}</i>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Listing;
