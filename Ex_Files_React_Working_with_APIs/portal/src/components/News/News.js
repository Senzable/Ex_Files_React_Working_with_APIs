import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
      const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=22e35e1e7da54604afb100a1dcfe9a74';

      fetch(url)
        .then((response) => {
           return response.json(); 
        })
        .then((data) => {
          this.setState({
            news: data.articles  
          })  
        })
        .catch((error) => console.log(error));   
    }

    renderItems() {
      return this.state.news.map((item) => (
          <NewSingle key={item.id} item={item} />
      )); 
    }

    render() {
      return (
        <ul>
            {this.renderItems()}
        </ul>
      );
    }
}

export default News;