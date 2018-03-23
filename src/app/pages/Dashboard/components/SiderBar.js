import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from 'pages/Login/actions';
import { changeBudget } from 'pages/Dashboard/actions';
import { InputNumber, Modal, Button, Icon } from 'antd';
import { StyledSiderBar } from '../styles';
import { StyledH3, StyledP } from 'common/components';
import { formatBalance } from 'utils/helpers';
class SiderBar extends React.Component {
  state = {
    loading: false,
    visible: false,
    editBudget: this.props.budget
  };
  componentWillReceiveProps (nextProps) {
    this.setState({
      editBudget: nextProps.budget
    });
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
      this.props.changeBudget({ budget: this.state.editBudget });
    }, 1000);
  };
  handleCancel = () => {
    this.setState({ visible: false, editBudget: this.props.budget });
  };
  onChangeBudget = value => {
    this.setState({ editBudget: value });
  };
  render () {
    const { visible, loading, editBudget } = this.state;
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
          <Icon type="wallet" /> Budget: ${formatBalance(budget)}
        </StyledP>
        <Button type="primary" style={{ marginBottom: 10 }} onClick={this.showModal}>
          <Icon type="setting" /> Settings
        </Button>
        <Button onClick={logout} type="primary">
          <Icon type="poweroff" /> Log out
        </Button>
        <Modal
          visible={visible}
          title="Profile settings"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Save
            </Button>
          ]}
        >
          <InputNumber
            style={{ width: '100%' }}
            value={editBudget}
            onChange={this.onChangeBudget}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
          />
        </Modal>
      </StyledSiderBar>
    );
  }
}

SiderBar.propTypes = {
  budget: PropTypes.number,
  username: PropTypes.string,
  logout: PropTypes.func,
  changeBudget: PropTypes.func
};

const mapStateToProps = state => ({
  budget: state.dashboard.budget,
  username: state.login.username
});
const mapDispatchToProps = dispatch => ({
  logout () {
    dispatch(logout['INIT']());
  },
  changeBudget (data) {
    dispatch(changeBudget['INIT'](data));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(SiderBar);
