import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
const News = (props) => {
  // static PropTypes = {
  //   country : PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string
  // }
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [pgno, setpgno] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const capital = (word) => {
    let a = word.toLowerCase();
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  // this.state = {
  //   articles: [],
  //   loading: false,
  //   page: 1,
  //   pgno: 1,
  //   totalResults: 0
  // };
  document.title = ` ${
    props.category
      ? " haNuMAAN News - " + capital(props.category)
      : "haNuMAAN News"
  }`;

  // pageSize = props;          //number of articles in a page
  const updatenews = async () => {
    props.progress(10);
    // this.setState({ loading: true });
    setloading(true);
    props.progress(20);
    console.log("kya loge");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a49cdb7f50649829d6f353f95139f78&page=1&pagesize=${props.pageSize}`; //9a49cdb7f50649829d6f353f95139f78 extra  76fae1e6c3bb4d7aa83e45618fad0ae4
    let data = await fetch(url);
    props.progress(30);
    props.progress(40);
    props.progress(50);
    props.progress(60);
    props.progress(70);

    let parsedData = await data.json();
    props.progress(80);

    console.log(parsedData);
    props.progress(90);
    setloading(true);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);

    // this.setState({
    //   articles: parsedData.articles,
    //   totalArticles: parsedData.totalResults,
    //   loading: false,
    // });
    props.progress(100);
  };
  useEffect(() => {
    updatenews();
  }, []);

  //  async componentDidMount () {

  // }
  // const handlePrev = async () => {
  //   console.log("Next");
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${
  //     props.category
  //   }&apiKey=76fae1e6c3bb4d7aa83e45618fad0ae4&page=${
  //     this.state.page - 1
  //   }&pagesize=${props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     articles: parsedData.articles,
  //     page: this.state.page - 1,
  //     pgno: this.state.pgno - 1,
  //     loading: false,
  //   });

  // };
  // handleNext = async () => {
  //   console.log("previous");
  //   this.setState({ loading: true });
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / 18))) {
  //     console.log(this.state.totalArticles);

  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       props.country
  //     }&category=${
  //       props.category
  //     }&apiKey=76fae1e6c3bb4d7aa83e45618fad0ae4&page=${
  //       this.state.page + 1
  //     }&pagesize=${props.pageSize}`;
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       pgno: this.state.pgno + 1,
  //       loading: false,
  //     });
  //   }
  // };
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=9a49cdb7f50649829d6f353f95139f78&page=${
      page + 1
    }&pagesize=${props.pageSize}`; //9a49cdb7f50649829d6f353f95139f78 extra  76fae1e6c3bb4d7aa83e45618fad0ae4
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalArticles: parsedData.totalResults,
    //   loading: false,
    //   page: page + 1
    // });
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
    setpage(page + 1);
  };

  return (
    
    <div className="container">
      <Navbar link="" linkk={props.nav} linkk1={props.nav1}
      linkk2={props.nav2}
      linkk3={props.nav3}
      linkk4={props.nav4}
      linkk5={props.nav5}
      linkk6={props.nav6}
      linkk7={props.nav7}
      linkk8={props.nav8}
      linkk9={props.nav9}
      />
      {/* <button onClick={componentDidMount}>yeo</button> */}
      <h2 className=" text-center my-5 " style={{marginTop:90}}>haNuMAAN - Top Headlines</h2>

      <div style={{ overflow: "none" }}>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner />}
        >
          <div className="row container">
            {articles.map((element) => {
              return (
                <div className="col-md-10 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 70)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    url={element.url}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
      {/* {loading && <Spinner />} */}
    </div>
  );
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
News.defaultProps = {
  country: "in",
  pageSize: 18,
  category: "general",
};

export default News;
