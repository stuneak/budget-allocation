import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'pages/Login/actions';
import { HomeLayout } from './styles';
class Home extends React.Component {
  render () {
    const { budget, shoppingList, categories } = this.props.userData;
    return (
      <HomeLayout>
        <button onClick={this.props.logout}>Logout</button>

        <h1>
          balance: {budget} user: {this.props.username}
        </h1>
        <p>
          shoppingList:
          {shoppingList.map((item, idx) => <li key={idx}>{item}</li>)}
        </p>
        <p>
          categories: {categories.map((item, idx) => <li key={idx}>{item}</li>)}
        </p>
      </HomeLayout>
    );
  }
}

function mapStateToProps (state) {
  return { userData: state.home, username: state.login.username };
}

export default connect(mapStateToProps, { logout })(Home);
