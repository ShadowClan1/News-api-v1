import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class Top extends Component {
  pageSize = this.props;
  constructor() {
    super();
    console.log("hello im a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pgno: 1,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    console.log("kya loge");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=76fae1e6c3bb4d7aa83e45618fad0ae4&page=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }
  handlePrev = async () => {
    console.log("Next");
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=76fae1e6c3bb4d7aa83e45618fad0ae4&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      pgno: this.state.pgno - 1,
      loading: false,
    });
  };
  handleNext = async () => {
    console.log("previous");
    this.setState({ loading: true });
    if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / 18))) {
      console.log(this.state.totalArticles);

      let url = `https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=76fae1e6c3bb4d7aa83e45618fad0ae4&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        pgno: this.state.pgno + 1,
        loading: false,
      });
    }
  };

  render() {
    let koi = "koi anne ko hai";
    return (
      <div className="container m-3">
        <h2 className="m-3 text-center">haNuMAAN - Top Headlines</h2>
        <div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-primary btn-dark"
              onClick={this.handlePrev}
            >
              {" "}
              &larr; previous
            </button>
            <button type="button" className="btn btn-dark">
              {this.state.pgno}/
              {Math.ceil(this.state.totalArticles / this.props.pageSize)}
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalArticles / 18)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
        {this.state.loading && <Spinner />}
        <div className="row container">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 70)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-primary btn-dark"
              onClick={this.handlePrev}
            >
              {" "}
              &larr; previous
            </button>
            <button type="button" className="btn btn-dark">
              {this.state.pgno}/
              {Math.ceil(this.state.totalArticles / this.props.pageSize)}
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalArticles / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
