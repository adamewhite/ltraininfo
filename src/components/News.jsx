import React, { Component } from 'react';
import '../stylesheets/News.css';
import news from '../news.json';

class News extends Component {
	constructor(props) {
		super(props);
		this.state = {news: '', latestFirst: true};
		this.changeNews = this.changeNews.bind(this);
		this.toggleDateOrder = this.toggleDateOrder.bind(this);
	}

	componentDidMount() {
		this.setState({news: 'all', latestFirst: false});
	}

	changeNews(newNews) {
		this.setState({news: newNews});
	}

	toggleDateOrder() {
		this.setState(prevState => ({
		  latestFirst: !prevState.latestFirst
		}));
	}

	sortByDate(a, b) {
		if (this.state.latestFirst) {
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		} else {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		}
	}

  createLinks() {
    let links = [];
    let narrowedNews = [];

    this.state.news === 'all' 
    	? narrowedNews = news.news
    	: narrowedNews = news.news.filter(item => item.keywords.indexOf(this.state.news) !== -1);

    narrowedNews.sort(this.sortByDate.bind(this));

    narrowedNews.map((item, index) => {
      links.push(<li className="links__item" key={index}>
                  <h2 className="links__item--date">{item.date}</h2>
                  <a className="links__item--link" href={item.url} alt={item.title} target="_blank"> 
                  	<p className="links__item--title">{item.title}</p>
                  </a>
                  <h3 className="links__item--author">{item.author}</h3>
                  <h3 className="links__item--source">{item.source}</h3>
                </li>)
    });

    return links;
  }

  render() {
    return (
    	<section className="section">
	    	<h1 className="section__heading">The latest news</h1>
	    	<ul className="menu__list">
	    		<li className="menu__item">
	    			<h2 className="menu__heading">Filter</h2>
	    		</li>	    		
	    		<li className="menu__item" onClick={() => this.changeNews('all')}>
	    			<p className="menu__title">All the news</p>
	    		</li>	    		
	    		<li className="menu__item" onClick={() => this.changeNews('goodnews')}>
	    			<p className="menu__title">The good news</p>
	    		</li>
	    		<li className="menu__item" onClick={() => this.changeNews('badnews')}>
	    			<p className="menu__title">The bad news</p>
	    		</li>
	    		<li className="menu__item" onClick={() => this.changeNews('mehnews')}>
	    			<p className="menu__title">The meh news</p>
	    		</li>
	    	</ul>
	    	<ul className="menu__list">
	    	<li className="menu__item">
	    		<h2 className="menu__heading">Sort by</h2>
	    	</li>	
	    		<li className="menu__item">
	    			<p className="menu__title" onClick={this.toggleDateOrder}>Date</p>
	    		</li>
	    	</ul>
	      <ul className="links__list">
	        {this.createLinks()}
	      </ul>
      </section>
      );
  }
}

export default News;
