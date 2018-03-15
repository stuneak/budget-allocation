import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'pages/Login/actions';
import { StyledLayout } from './styles';
import { Layout } from 'antd';
import { SiderBar } from './components';
const { Content } = Layout;

class Dashboard extends React.Component {
  render () {
    const { userData: { budget }, logout, username } = this.props;
    return (
      <StyledLayout>
        <SiderBar budget={budget} handleLogOut={logout} username={username} />
        <Layout>
          <Content>Content</Content>
        </Layout>
      </StyledLayout>
    );
  }
}

function mapStateToProps (state) {
  return { userData: state.dashboard, username: state.login.username };
}

export default connect(mapStateToProps, { logout })(Dashboard);
