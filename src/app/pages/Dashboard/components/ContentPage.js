import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Row, Col, Icon, Badge } from 'antd';
import { makeGetShoppingList, makeGetCategories } from '../selectors';
import { HeaderForList, StyledUl, IconList, ItemInList } from 'common/components';

const { Content } = Layout;

class ContentPage extends React.Component {
  state = {
    selectedEditableItem: null,
    isEditing: false
  };
  handleDelete = (id, type) => {
    if (type === 'shopping') {
      const filterShopping = this.props.shoppingList.filter((item, idx) => idx !== id);
      console.log(filterShopping);
    }
    if (type === 'categories') {
      const filterCategories = this.props.categories.filter((item, idx) => idx !== id);
      console.log(filterCategories);
    }
  };
  handleEditing = id => {
    console.log('editing', id);
    this.setState({
      selectedEditableItem: id,
      isEditing: true
    });
  };
  render () {
    const { categories, shoppingList } = this.props;

    const renderShopping = shoppingList.map((item, idx) => (
      <ItemInList key={idx}>
        <span>
          <p>Name: {item.label}</p>
          <p>Categories: {item.categories}</p>
          <p>Price: ${item.price}</p>
        </span>
        <IconList direction="column" size="20">
          <Icon style={{ cursor: 'pointer' }} onClick={() => this.handleEditing(idx)} type="edit" />
          <Icon style={{ cursor: 'pointer' }} type="copy" />
          <Icon
            style={{ cursor: 'pointer' }}
            onClick={() => this.handleDelete(idx, 'shopping')}
            type="close-circle"
          />
        </IconList>
      </ItemInList>
    ));

    const renderCategories = categories.map((item, idx) => (
      <ItemInList key={idx}>
        <span> Name: {item} </span>
        <IconList direction="row" size="20">
          <Icon style={{ cursor: 'pointer' }} type="edit" />
          <Icon style={{ cursor: 'pointer' }} type="copy" />
          <Icon
            style={{ cursor: 'pointer' }}
            onClick={() => this.handleDelete(idx, 'categories')}
            type="close-circle"
          />
        </IconList>
      </ItemInList>
    ));

    return (
      <Content>
        <Row>
          <Col span={12}>
            <HeaderForList>
              <span>
                Shopping
                <Badge
                  count={shoppingList.length}
                  overflowCount={999}
                  style={{ backgroundColor: '#52c41a', boxShadow: '0 0 0 1px #52c41a inset' }}
                />
              </span>
              <Icon type="plus-circle" />
            </HeaderForList>
            <StyledUl> {renderShopping}</StyledUl>
          </Col>
          <Col span={12}>
            <HeaderForList>
              <span>
                Categories
                <Badge
                  count={categories.length}
                  overflowCount={999}
                  style={{ backgroundColor: '#52c41a', boxShadow: '0 0 0 1px #52c41a inset' }}
                />
              </span>
              <Icon type="plus-circle" />
            </HeaderForList>
            <StyledUl> {renderCategories}</StyledUl>
          </Col>
        </Row>
      </Content>
    );
  }
}

ContentPage.propTypes = {
  categories: PropTypes.array,
  shoppingList: PropTypes.array
};

const mapStateToProps = state => ({
  shoppingList: makeGetShoppingList(state),
  categories: makeGetCategories(state)
});

export default connect(mapStateToProps, null)(ContentPage);
