import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Middleware extends Component {
  render() {
    return (
      // <div className="container">
      //   <div className="panel panel-default">
      //     <div className="panel-body">
      //       <h1>test</h1>
      //     </div>
      //   </div>
      // </div>
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
    )
  }
}


export default Middleware;