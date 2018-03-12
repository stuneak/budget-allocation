import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'pages/Login/actions';
class Home extends React.Component {
  render () {
    const { budget, shoppingList, categories } = this.props.userData;
    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>
        <h1>user data: {budget}</h1>
        <p>
          shoppingList:
          {shoppingList.map((item, idx) => <li key={idx}>{item}</li>)}
        </p>
        <p>
          categories: {categories.map((item, idx) => <li key={idx}>{item}</li>)}
        </p>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { userData: state.home };
}

export default connect(mapStateToProps, { logout })(Home);
