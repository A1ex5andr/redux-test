import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {

    // to receive access to ROUTER >>>
    static contextTypes = {
      router: React.PropTypes.object
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
        alert("Please, SIGN IN to continue!");
      }
    };

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
        alert("Come back soon :)");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {authenticated: state.authenticated};
  }

  return connect(mapStateToProps)(Authentication);
}