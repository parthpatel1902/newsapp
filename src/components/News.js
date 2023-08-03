import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [];

  constructor(){
    super();
    // console.log("This is constructour");

    this.state = {
      articles:this.articles,
      loadding:false
    }
  }

  async componentDidMount() 
  {
    console.log("componentDidmount");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=97237512be7143b09102baaded6e2ca3";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
  }

  render(props) {
    console.log("Render");
    return (
      <>
        <div className="container">
          <div className="row mt-5">
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
          </div>
        </div>
      </>
    );
  }
}
