import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';

import { getItemsWithTotals } from 'modules/cart/selectors';

function mapStateToProps(state) {
  return {
    items: getItemsWithTotals(state),
  };
}

import * as cartActions from 'modules/cart/actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...cartActions,
  }, dispatch);
}

class CartItems extends Component {
  render() {
    const { items, removeItem, changeQuantity } = this.props;

    return (
      <tbody>
        {(() => {
          if (items.size === 0) {
            return (
              <tr>
                <td colSpan="4">
                  There are no items in your cart.
                </td>
              </tr>
            );
          }

          return items.map((i, idx) => (
            <tr key={ idx }>
              <td>{ i.get('name') }</td>
              <td>
                <button
                  onClick={ () => changeQuantity(i.get('id'), 1) }
                  className="mr1 blue btn">
                  <i className="ion-arrow-up-b" />
                </button>
                <span style={{ display: 'inline-block', width: 25 }} className="center ml1 mr1">
                  { i.get('quantity') }
                </span>
                <button
                  onClick={ () => changeQuantity(i.get('id'), -1) }
                  className="ml1 red btn">
                  <i className="ion-arrow-down-b" />
                </button>
              </td>
              <td>${ i.get('price') }</td>
              <td>${ i.get('total') }</td>
              <td>
                <button onClick={ () => removeItem(i.get('id')) }>Remove</button>
              </td>
            </tr>
          )).toList();
        })()}
      </tbody>
    );
  }
}

CartItems.displayName = 'CartItems';
CartItems.propTypes = {
  items: PropTypes.instanceOf(Map),
  removeItem: PropTypes.func,
  changeQuantity: PropTypes.func,
};
CartItems.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItems);
