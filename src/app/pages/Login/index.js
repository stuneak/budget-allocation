import React from 'react';
import { connect } from 'react-redux';
import { signIn, signUp } from './actions';
import {
  LoginLayout,
  Tabs,
  TabsLink,
  Form,
  FormInput,
  FormWrap
} from './styles';

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
      this.props.history.push('/home');
    }
  }
  componentWillUpdate (nextProps) {
    if (nextProps.isAuthenticated) {
      this.props.history.push('/home');
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
    return (
      <LoginLayout>
        <FormWrap>
          <Tabs>
            <TabsLink
              onClick={() => this.changeTab('signin')}
              active={this.state.activeTab === 'signin'}
              href="#"
            >
              Sign In
            </TabsLink>
            <TabsLink
              onClick={() => this.changeTab('signup')}
              active={this.state.activeTab === 'signup'}
              href="#"
            >
              Sign Up
            </TabsLink>
          </Tabs>
          <Form
            active={this.state.activeTab === 'signin'}
            onSubmit={event => this.handleSubmit(event, 'signin')}
          >
            <FormInput
              type="text"
              placeholder="Username"
              name="username"
              onChange={this.saveUserData}
            />
            <FormInput
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.saveUserData}
            />
            <FormInput type="submit" value="SIGN IN" />
          </Form>
          <Form
            active={this.state.activeTab === 'signup'}
            onSubmit={event => this.handleSubmit(event, 'signup')}
          >
            <FormInput
              onChange={this.saveUserData}
              type="text"
              placeholder="Username"
              name="username"
            />
            <FormInput
              onChange={this.saveUserData}
              type="password"
              placeholder="Password"
              name="password"
            />
            <FormInput type="submit" value="SIGN UP" />
          </Form>
        </FormWrap>
      </LoginLayout>
    );
  }
}
function mapStateToProps (state) {
  return { isAuthenticated: state.login.isAuthenticated };
}

export default connect(mapStateToProps, { signIn, signUp })(Login);
