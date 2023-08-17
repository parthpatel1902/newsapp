import React, { Component } from 'react'

export default class NewsItem extends Component {
  render(props) {
    let {title,description,imgurl,newsurl} = this.props;
    return (
      <div className='m-3'>
        <div className="card" style={{width: '18rem'}}>
            <img className='card-img-top' src={imgurl} alt='cricket1'/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsurl} target='blank' className="btn btn-dark btn-block">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
