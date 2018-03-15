import React from 'react';
import { Layout, Button } from 'antd';
import styled from 'styled-components';
import { StyledH3, StyledP } from 'common/components';

const { Sider } = Layout;
const StyledSiderBar = styled(Sider)`
  padding: 10px;
`;

export class SiderBar extends React.Component {
  render () {
    const { budget, username, handleLogOut } = this.props;
    return (
      <StyledSiderBar>
        <StyledH3 color="#1890ff">Info</StyledH3>
        <StyledP color="#1890ff">Username: {username}</StyledP>
        <StyledP color="#1890ff">Budget: ${budget}</StyledP>
        <Button onClick={handleLogOut} type="primary">
          Log out
        </Button>
      </StyledSiderBar>
    );
  }
}
