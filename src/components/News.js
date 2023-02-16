import React, { Component } from 'react' //rce
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        this is an news component
        <NewsItem/>
        <NewsItem/>     
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        
        
      </div>
    )
  }
}

export default News
