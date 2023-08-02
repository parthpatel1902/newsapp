import React, { Component } from 'react'

export default class NewsItem extends Component {
  render(props) {
    let {title,description,imgurl,newsurl} = this.props;
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
            <img className='card-img-top' src={imgurl} alt='cricket1'/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="/" className="btn btn-primary btn-block">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
