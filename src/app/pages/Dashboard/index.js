import React from 'react';
import { StyledLayout } from './styles';
import { Layout } from 'antd';
import SiderBar from './components/SiderBar';
import ContentPage from './components/ContentPage';

class Dashboard extends React.Component {
  render () {
    return (
      <StyledLayout>
        <SiderBar />
        <Layout>
          <ContentPage />
        </Layout>
      </StyledLayout>
    );
  }
}

export default Dashboard;
