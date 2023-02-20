// import React, { Component } from "react"; //rce
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 10,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   // articles = [
//   //   {
//   //     source: {
//   //       id: "wired",
//   //       name: "Wired",
//   //     },
//   //     author: "Boone Ashworth",
//   //     title: "OnePlus Pad Android Tablet: Details, Specs, Release Date",
//   //     description:
//   //       "Plus: Netflix expands its efforts to end password sharing, Apple’s “buy now, pay later” entry creeps closer, and we scrutinize your Bitcoin spending.",
//   //     url: "https://www.wired.com/story/oneplus-pad-android-tablet/",
//   //     urlToImage:
//   //       "https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg",
//   //     publishedAt: "2023-02-11T14:00:00Z",
//   //     content:
//   //       "Theres no shortage of tablets in the world, from the ever-dominant iPad to an assortment of Android options and Fire tabs to the niche weirdos like the E-ink and stylus Kindle Scribe. Now, OnePlus, a… [+4068 chars]",
//   //   },
//   //   {
//   //     source: {
//   //       id: null,
//   //       name: "Gizmodo.com",
//   //     },
//   //     author: "Mack DeGeurin",
//   //     title:
//   //       "El Salvador Is Planning a 'Bitcoin Embassy' in Texas After Losing Tens of Millions on Crypto",
//   //     description:
//   //       "El Salvador, which has already lost tens of millions of taxpayer dollars on its authoritarian millennial president’s beleaguered effort to embrace cryptocurrencies, now says it plans to open a “bitcoin embassy” in Texas. The Central American country’s continu…",
//   //     url: "https://gizmodo.com/bitcoin-price-el-salvador-embassy-texas-crypto-crash-1850118217",
//   //     urlToImage:
//   //       "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ccb1cf72839bb2d47936bf0eadf47da0.jpg",
//   //     publishedAt: "2023-02-15T18:03:53Z",
//   //     content:
//   //       "El Salvador, which has already lost tens of millions of taxpayer dollars on its authoritarian millennial presidents beleaguered effort to embrace cryptocurrencies, now says it plans to open a bitcoin… [+2879 chars]",
//   //   },
//   //   {
//   //     source: {
//   //       id: "reuters",
//   //       name: "Reuters",
//   //     },
//   //     author: null,
//   //     title: "Cryptoverse: Big investors edge back to bitcoin - Reuters",
//   //     description:
//   //       "Big investors are dipping their toes into crypto waters again after a bumper month for bitcoin.",
//   //     url: "https://www.reuters.com/technology/cryptoverse-big-investors-edge-back-bitcoin-2023-01-31/",
//   //     urlToImage:
//   //       "https://www.reuters.com/resizer/wVEBWtf3RmkXKgyvKm8NmhJ80-U=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FE2DLHQ4UBOOPNWFOIS34JBLP4.jpg",
//   //     publishedAt: "2023-01-31T06:01:08Z",
//   //     content:
//   //       "Jan 31 (Reuters) - Big investors are dipping their toes into crypto waters again after a bumper month for bitcoin.\r\nDigital asset investment products, often favored by institutional investors, saw in… [+4079 chars]",
//   //   },
//   //   {
//   //     source: {
//   //       id: null,
//   //       name: "Benzinga",
//   //     },
//   //     author: "Mehab Qureshi",
//   //     title:
//   //       "Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant Long-Term Bulls' - Benzinga",
//   //     description:
//   //       "Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant Long-Term Bulls'  Benzinga\r\nBitcoin roars past $20K in surprise surge. Can the rally last?  Fortune\r\n</li><li>Bitcoin rises 5.6% to $210…",
//   //     url: "https://www.benzinga.com/markets/cryptocurrency/23/01/30424910/bitcoin-surges-above-21k-ethereum-dogecoin-rally-intact-analyst-says-this-could-awaken-som",
//   //     urlToImage:
//   //       "https://cdn.benzinga.com/files/images/story/2023/01/15/kanchanara-4kjjezdyo3m-unsplash.jpg?width=1200&height=800&fit=crop",
//   //     publishedAt: "2023-01-16T02:50:45Z",
//   //     content:
//   //       "Major coins traded green on Sunday buoyed by renewed investor confidence that the Federal Reserve is managing inflation successfully without pushing the economy into recession. \r\n<table><tr><th>Crypt… [+2581 chars]",
//   //   },
//   //   {
//   //     source: {
//   //       id: "reuters",
//   //       name: "Reuters",
//   //     },
//   //     author: null,
//   //     title: "Cryptoverse: Bitcoin is back with a bonk - Reuters",
//   //     description:
//   //       "Bitcoin is on the charge in 2023, dragging the crypto market off the floor and electrifying bonk, a new meme coin.",
//   //     url: "https://www.reuters.com/technology/cryptoverse-bitcoin-is-back-with-bonk-2023-01-17/",
//   //     urlToImage:
//   //       "https://www.reuters.com/resizer/jPD5gWOp4iaNFHGJCoc9M20WksQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MLQZOZNWTZLSRJTK4RZJLSI364.jpg",
//   //     publishedAt: "2023-01-17T06:16:00Z",
//   //     content:
//   //       "Jan 17 (Reuters) - Bitcoin is on the charge in 2023, dragging the crypto market off the floor and electrifying bonk, a new meme coin.\r\nThe No.1 cryptocurrency has clocked a 26% gain in January, leapi… [+4367 chars]",
//   //   },
//   //   {
//   //     source: {
//   //       id: "business-insider",
//   //       name: "Business Insider",
//   //     },
//   //     author: "hbullock@insider.com (Hallam Bullock)",
//   //     title: "How to get ahead in 2023",
//   //     description:
//   //       "Insider's Hallam Bullock has rounded up some of our top markets stories. Including top tips for stocks and what to expect for the rest of 2023.",
//   //     url: "https://www.businessinsider.com/how-to-get-ahead-in-2023-2023-1",
//   //     urlToImage:
//   //       "https://i.insider.com/63bf31ef33ffb700180f63f5?width=1200&format=jpeg",
//   //     publishedAt: "2023-01-16T11:05:00Z",
//   //     content:
//   //       "Hello friends. Insider's newsletter editor Hallam Bullock here, reporting from London while Phil Rosen is out. Even though ChatGPT wrote a convincing article for Phil last week, AI can't hope to deli… [+3771 chars]",
//   //   },
//   // ];

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [], //this.articles
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = `${
//       this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
//     } - NewsMonkey`;
//   }

//   async updateNews() {
//     this.props.setProgress(10);
//     //bc0b9cd7fbb9409da9423e5fda777e67
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url); //promise degi
//     this.props.setProgress(40);
//     let parsedData = await data.json();
//     this.props.setProgress(60);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.updateNews();
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
//     // this.setState({ loading: true });
//     // let data = await fetch(url); //promise degi
//     // let parsedData = await data.json();
//     // this.setState({
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loading: false,
//     // });
//   }

//   handlePrevClick = async () => {
//     //   // let url = `https://newsapi.org/v2/top-headlines?country=${
//     //   //   this.props.country
//     //   // }&category=${
//     //   //   this.props.category
//     //   // }&apiKey=${this.props.apiKey}&page=${
//     //   //   this.state.page - 1
//     //   // }&pageSize=${this.props.pageSize}`;
//     //   // this.setState({ loading: true });
//     //   // let data = await fetch(url); //promise degi
//     //   // let parsedData = await data.json();

//     //   // this.setState({
//     //   //   page: this.state.page - 1,
//     //   //   articles: parsedData.articles,
//     //   //   loading: false,
//     //   // });
//     //   this.setState({ page: this.state.page - 1 });
//     this.updateNews();
//   };

//   handleNextClick = async () => {
//     //   // if (
//     //   //   !(
//     //   //     this.state.page + 1 >
//     //   //     Math.ceil(this.state.totalResults / this.props.pageSize)
//     //   //   )
//     //   // ) {
//     //   //   let url = `https://newsapi.org/v2/top-headlines?country=${
//     //   //     this.props.country
//     //   //   }&category=${
//     //   //     this.props.category
//     //   //   }&apiKey=${this.props.apiKey}&page=${
//     //   //     this.state.page + 1
//     //   //   }&pageSize=${this.props.pageSize}`;
//     //   //   this.setState({ loading: true });
//     //   //   let data = await fetch(url); //promise degi
//     //   //   let parsedData = await data.json();

//     //   //   this.setState({
//     //   //     page: this.state.page + 1,
//     //   //     articles: parsedData.articles,
//     //   //     loading: false,
//     //   //   });
//     //   // }
//     //   this.setState({ page: this.state.page + 1 });
//     this.updateNews();
//   };
//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     // this.updateNews()
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     // this.setState({ loading: true });
//     let data = await fetch(url); //promise degi
//     let parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1 className="text-center my-3">
//           NewsMonkey -{" "}
//           {this.props.category.charAt(0).toUpperCase() +
//             this.props.category.slice(1)}{" "}
//           Headlines
//         </h1>
//         {this.state.loading && <Spinner />}
//         {/* this is an news component */}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {this.state.articles.map((element) => {
//                 return (
//                   <div className="col-md-4" key={element.url}>
//                     <NewsItem
//                       title={element.title}
//                       description={element.description}
//                       imageUrl={element.urlToImage}
//                       newsUrl={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>
//       </>
//       /* <div className="container d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             type="button"
//             className="btn btn-primary"
//             onClick={this.handlePrevClick}
//           >
//             {" "}
//             &larr; Previous Page
//           </button>
//           <button
//             disabled={
//               this.state.page + 1 >
//               Math.ceil(this.state.totalResults / this.props.pageSize)
//             }
//             type="button"
//             className="btn btn-primary"
//             onClick={this.handleNextClick}
//           >
//             Next Page &rarr;
//           </button>
//         </div> */
//     );
//   }
// }

// export default News;

import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);

    }

    useEffect(() => {
        updateNews(); 
    }, [])
 

    const handlePrevClick = async () => {
        setPage(page-1)
        updateNews();
    }

    const handleNextClick = async () => { 
        setPage(page+1)
        updateNews()
    }

    const fetchMoreData = async () => {   
        setPage(page+1) 
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>

            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
