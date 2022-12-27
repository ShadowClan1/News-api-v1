import React, { Component } from "react";

const NewsItem=(props)=> {
  // render() {
    // let { title, description, imageUrl, url, date, source } = this.props;

    let date1 = new Date(props.date);
    let text = "";
  

    return (
      <div>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="card">
            <div
              className="flex"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
              }}
            >
              <span
                className={`badge rounded-pill bg-${
                  props.source === "Livemint" || props.source === "NDTV News"
                    ? "danger"
                    : "primary"
                }`}
                style={{ zIndex: 1, left: "90%" }}
              >
                {props.source}
                <span className="visually-hidden"></span>
              </span>
            </div>

            <img
              src={
                props.imageUrl != null
                  ? props.imageUrl
                  : "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {props.title} <span className={`badge text-bg-`}>{props.source}</span>
              </h5>
              <p className="card-text">{props.description}</p>
              <button
                href={props.url}
                target="_blank"
                rel="noreferrer"
                className={`btn btn-dark btn-sm`}
              >
                Read more...
              </button>

              <p className="card-text">
                <small className="text-muted">
                  Last updated At {date1.toGMTString()}
                </small>
              </p>
            </div>
          </div>
        </a>
      </div>
    );
  }
// }

export default NewsItem;
