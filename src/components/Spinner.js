import React, { Component } from 'react'
import loader from './loader.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='mt-6'>
        <center>
            <img src={loader} alt='loading'/>
        </center>
      </div>
    )
  }
}
 