import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

 const News=(props)=> {

   const[articles,setArticles]=useState([])
   const[loading,setLoading]=useState(true)
   const[page,setPage]=useState(1)
   const[totalResults,settotalResults]=useState(0);
   //  document.title = `${this.capitalizeFirstLetter(
    //this.props.category
  //)}-NewsMonkey`;
   
  // News.defaultProps = {
  //   country: "in",
  //   pageSize: 8,
  //   category: "science",
  // };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  useEffect(()=>{
    updateNews();  

  },[])
  
  //life cycle method for after render  html or after render method call this method is called


  const  updateNews =async()=>  {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    setLoading(true);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
     setLoading(false);
    props.setProgress(100);
  }

  const handleNextClick = async () => {
    setPage(page + 1); 
    updateNews();
  };

 const  handlePrevClick = async () => {
     setPage(page - 1); 
     updateNews();
  };

  const fetchMoreData = async () => {
  
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=886d9a4a593643b892da272af906bbae&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    setLoading(false);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };

  
    return (
      <>
        {/*<div className="container my-3">
         {/* <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1} type="button"  onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
        <button  type="button"  disabled={this.state.articles===undefined||this.state.articles===null||this.state.articles.length===0}   onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div> */}
        <h1 className="text-center" style={{ margin: "35px 0px",marginTop:'90px' }}>
          NewsMonkey - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      decription={element.description}
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images.moneycontrol.com/static-mcnews/2021/04/Indigrid.jpg"
                      }
                      newsUrl={element.url}
                      source={element.source.name}
                      author={element.author}
                      date={element.publishedAt}
                    ></NewsItem>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* </div>*/}
      </>
    );
  }


export default News;
