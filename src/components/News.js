import React, { Component } from 'react' //rce
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container' my-3>
        <h2>NewsMonkey - Top Headlines</h2>
        {/* this is an news component */}

        <div className='row'>
            <div className="col-md-4">
            <NewsItem  title="mytitle" description="jodmohak"/>
            </div>

            <div className="col-md-4">
            <NewsItem  title="mytitle" description="jodmohak"/>
            </div>

            <div className="col-md-4">
            <NewsItem  title="mytitle" description="jodmohak"/>
            </div>
        </div>
        
        
        
      </div>
    )
  }
}

export default News
