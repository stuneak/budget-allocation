import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'pages/Login/actions';
import { StyledLayout } from './styles';
import { Layout } from 'antd';
import { SiderBar } from './components';

const { Content } = Layout;

class Dashboard extends React.Component {
  render () {
    const { userData: { budget, shoppingList, categories }, logout, username } = this.props;

    const renderShoppingList = shoppingList.map((item, idx) => (
      <li key={idx}>
        <p>categories: {item.categories}</p>
        <p>name: {item.label}</p>
        <p>price: {item.price}</p>
      </li>
    ));

    const renderCategories = categories.map((item, idx) => <li key={idx}>name: {item}</li>);

    return (
      <StyledLayout>
        <SiderBar budget={budget} handleLogOut={logout} username={username} />
        <Layout>
          <Content>
            <ul>
              <h3>Shopping list{renderShoppingList}</h3>
            </ul>
            <ul>
              <h3>Categories list{renderCategories}</h3>
            </ul>
          </Content>
        </Layout>
      </StyledLayout>
    );
  }
}

function mapStateToProps (state) {
  return { userData: state.dashboard, username: state.login.username };
}

export default connect(mapStateToProps, { logout })(Dashboard);
