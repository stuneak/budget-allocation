import React from 'react';
import { connect } from 'react-redux';
import { signIn } from './actions';
class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };
  saveUserData = ({ target }) => {
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>username</label>
          <input name="username" onChange={this.saveUserData} />
        </div>
        <div>
          <label>password</label>
          <input name="password" onChange={this.saveUserData} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
function mapStateToProps (state) {
  return { todos: state.login };
}

export default connect(mapStateToProps, { signIn })(Login);
