import React from "react";
import axios from "axios";
import { useState } from "react";

const ApiIntegration = () => {
  const [news, setNews] = useState([]);

  const fetchdata = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=edc4c10e2e584afe863126fd6be96f18"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  };

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchdata}>
              Fetch news
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {news.map((item, i) => {
            return (
              <div className="col-4" key={i}>
                {" "}
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={item.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text" style={{ color: "#2b2b2b" }}>
                      {item.description}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Main
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ApiIntegration;
function then(arg0: (response: any) => void) {
  throw new Error("Function not implemented.");
}
