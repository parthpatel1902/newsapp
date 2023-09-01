import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  articles = [];

  constructor(){
    super();

    this.state = {
      articles:this.articles,
      // loadding:false
    }
  }

  async componentDidMount() // this is call after the render method is called
  {
    // console.log("componentDidmount");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=97237512be7143b09102baaded6e2ca3&page=${this.state.page}&pagesize=4`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles,page: 1});
  }

  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=97237512be7143b09102baaded6e2ca3&page=${this.state.page - 1}&pagesize=4`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});

    this.setState({
      page:this.state.page - 1,
    })
  }
   
  handlenext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=97237512be7143b09102baaded6e2ca3&page=${this.state.page + 1}&pagesize=4`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});

    this.setState({
      page:this.state.page + 1,
    })
  }
   
  render(props) {
    
    return (
      <>
        <div className="container">
          <div className="row mt-5">
            {this.state.loading && <Spinner/>}
            {this.state.articles.map((element)=>{
              return(<div className="col-md-4" key={element.url}>
              <NewsItem
                key={element.url}
                title={element.title?element.title.slice(0,45):""}
                description={element.description?element.description.slice(0,88):""}
                imgurl={!element.urlToImage?"https://wallpapercave.com/wp/wp12507496.jpg":element.urlToImage}
                newsurl={element.url}
              />
            </div>);
            })}
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleprev}>&larr; Previous</button>
                <button disabled={this.state.page>=9} className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
