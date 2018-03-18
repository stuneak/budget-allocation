import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from 'pages/Login/actions';
import { Layout, Button, Icon } from 'antd';
import styled from 'styled-components';
import { StyledH3, StyledP } from 'common/components';

const { Sider } = Layout;
const StyledSiderBar = styled(Sider)`
  padding: 10px;
`;

class SiderBar extends React.Component {
  render () {
    const { budget, username, logout } = this.props;
    return (
      <StyledSiderBar>
        <StyledH3 color="#1890ff">
          <Icon type="info-circle-o" /> info
        </StyledH3>
        <StyledP color="#1890ff">
          <Icon type="user" /> Username: {username}
        </StyledP>
        <StyledP color="#1890ff">
          <Icon type="wallet" /> Budget: ${budget}
        </StyledP>
        <Button onClick={logout} type="primary">
          Log out
        </Button>
      </StyledSiderBar>
    );
  }
}

SiderBar.propTypes = {
  budget: PropTypes.number,
  username: PropTypes.string,
  logout: PropTypes.func
};

function mapStateToProps (state) {
  return { budget: state.dashboard.budget, username: state.login.username };
}

export default connect(mapStateToProps, { logout })(SiderBar);
