import React from 'react';
import { render } from 'react-dom';
import 'styles/general.js';
import _axios from 'axios';
export const axios = _axios.create({
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' }
});
const root = document.createElement('div');
document.body.appendChild(root);

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: 'login',
      password: '123'
    };
  }
  componentWillMount () {
    let data = JSON.stringify(this.state);
    axios.post('/api/signin', data).then(data => console.log(data));
  }
  render () {
    return (
      <div>
        <p>username: {this.state.username}</p>
        <p>password: {this.state.password}</p>
      </div>
    );
  }
}

render(<App />, root);
