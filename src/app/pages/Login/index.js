import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn, signUp } from './actions';
import { LoginLayout, Tabs, Form, FormWrap } from './styles';
import { TextField, TabLink } from 'common/components';

class Login extends React.Component {
  state = {
    userData: {
      username: '',
      password: ''
    },
    activeTab: 'signin'
  };
  saveUserData = ({ target: { name, value } }) => {
    const state = { ...this.state.userData, [name]: value };
    this.setState({
      userData: state
    });
  };
  componentWillMount () {
    if (this.props.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillUpdate (nextProps) {
    if (nextProps.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  handleSubmit = (event, type) => {
    event.preventDefault();
    if (type === 'signin') {
      this.props.signIn(this.state.userData);
    } else {
      this.props.signUp(this.state.userData);
    }
  };
  changeTab = tab => {
    const state = { username: '', password: '' };
    this.setState({
      activeTab: tab,
      userData: state
    });
  };
  render () {
    const { activeTab, userData: { username, password } } = this.state;
    return (
      <LoginLayout>
        <FormWrap>
          <Tabs>
            <TabLink
              onClick={this.changeTab}
              active={activeTab}
              tabName="signin"
              href="#"
            >
              Sign In
            </TabLink>
            <TabLink
              onClick={this.changeTab}
              active={activeTab}
              tabName="signup"
              href="#"
            >
              Sign Up
            </TabLink>
          </Tabs>
          <Form
            active={activeTab === 'signin'}
            onSubmit={event => this.handleSubmit(event, 'signin')}
          >
            <TextField
              type="text"
              placeholder="Username"
              name="username"
              onChange={this.saveUserData}
              value={username}
            />
            <TextField
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.saveUserData}
              value={password}
            />
            <TextField type="submit" value="SIGN IN" />
          </Form>
          <Form
            active={activeTab === 'signup'}
            onSubmit={event => this.handleSubmit(event, 'signup')}
          >
            <TextField
              onChange={this.saveUserData}
              type="text"
              placeholder="Username"
              name="username"
              value={username}
            />
            <TextField
              onChange={this.saveUserData}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
            />
            <TextField type="submit" value="SIGN UP" />
          </Form>
        </FormWrap>
      </LoginLayout>
    );
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  history: PropTypes.array,
  signIn: PropTypes.func,
  signUp: PropTypes.func
};

function mapStateToProps (state) {
  return { isAuthenticated: state.login.isAuthenticated };
}

export default connect(mapStateToProps, { signIn, signUp })(Login);
