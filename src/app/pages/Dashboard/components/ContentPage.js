import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Row, Col, Icon, Badge } from 'antd';
import { makeGetShoppingList, makeGetCategories } from '../selectors';
import { HeaderForList, StyledUl, IconList, ItemInList } from 'common/components';

const { Content } = Layout;

class ContentPage extends React.Component {
  render () {
    const { categories, shoppingList } = this.props;

    const renderShoppingList = shoppingList.map((item, idx) => (
      <ItemInList key={idx}>
        <span>
          <p>Name: {item.label}</p>
          <p>Categories: {item.categories}</p>
          <p>Price: ${item.price}</p>
        </span>
        <IconList direction="column" size="20">
          <Icon type="edit" />
          <Icon type="copy" />
          <Icon type="close-circle" />
        </IconList>
      </ItemInList>
    ));

    const renderCategories = categories.map((item, idx) => (
      <ItemInList key={idx}>
        <span> Name: {item} </span>
        <IconList direction="row" size="20">
          <Icon type="edit" />
          <Icon type="copy" />
          <Icon type="close-circle" />
        </IconList>
      </ItemInList>
    ));

    return (
      <Content>
        <Row>
          <Col span={12}>
            <HeaderForList>
              <span>
                Shopping list
                <Badge
                  count={shoppingList.length}
                  overflowCount={999}
                  style={{ backgroundColor: '#52c41a', boxShadow: '0 0 0 1px #52c41a inset' }}
                />
              </span>
              <Icon type="plus-circle" />
            </HeaderForList>
            <StyledUl> {renderShoppingList}</StyledUl>
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

function mapStateToProps (state) {
  return {
    shoppingList: makeGetShoppingList(state),
    categories: makeGetCategories(state)
  };
}

export default connect(mapStateToProps, null)(ContentPage);
