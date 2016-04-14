import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return (
        <button className="btn pull-right btn-sm btn-default" onClick={() => this.props.authenticate(false)}>LOG OUT</button>
      )
    } else {
      return (
        <button className="btn pull-right btn-sm btn-primary" onClick={() => this.props.authenticate(true)}>SIGN IN</button>
      )
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/middleware">MIDDLEWARE</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">RESOURCES</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps, actions)(Header);