import React, {Component} from 'react';
import {Link} from 'react-router';
import * as actions from '../actions';
import {connect} from 'react-redux';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div className="col-sm-4" key={user.id}>
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{user.name}</h4>
            <p className="card-text">{user.company.name}</p>
            <button className="btn btn-warning">{user.website}</button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {users: state.users}
}

export default connect(mapStateToProps, actions)(UserList);