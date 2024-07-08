import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NewsItem =(props)=> {

    //destructuring
    let { title, decription, imgUrl, newsUrl,source,author,date } = props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%'}}>
                {source}
              </span> 
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
             
            </h5>
            <p className="card-text">{decription} ...</p>
            <p className="card-text">
              <small className="text-danger">
                By {author ? author : "UnKnown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p> 
            <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
