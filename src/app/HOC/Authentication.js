import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends React.Component {
    componentWillMount () {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/login');
      }
    }
    componentWillUpdate (nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/login');
      }
    }
    render () {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = {
    isAuthenticated: PropTypes.bool,
    history: PropTypes.object
  };

  function mapStateToProps (state) {
    return { isAuthenticated: state.login.isAuthenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
