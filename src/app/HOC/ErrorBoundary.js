import React from 'react';

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render () {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;