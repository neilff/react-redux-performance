import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';

import { getAvailableItems } from 'modules/cart/selectors';

function mapStateToProps(state) {
  return {
    items: getAvailableItems(state),
  };
}

import * as cartActions from 'modules/cart/actions';
import * as debugActions from 'modules/debug/actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...cartActions,
    ...debugActions,
  }, dispatch);
}

class AvailableItems extends Component {
  componentWillReceiveProps() {
    this.props.renderComponent('availableItems');
  }

  render() {
    const { items, addItem } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            items.map((i, idx) => (
              <tr key={ idx }>
                <td>{ i.get('name') }</td>
                <td>${ i.get('price') }</td>
                <td>
                  <button onClick={ () => addItem(i.get('id')) }>
                    Add to Cart
                  </button>
                </td>
              </tr>
            )).toList()
          }
        </tbody>
      </table>
    );
  }
}

AvailableItems.displayName = 'AvailableItems';
AvailableItems.propTypes = {
  items: PropTypes.instanceOf(Map),
  renderComponent: PropTypes.func,
  addItem: PropTypes.func,
};
AvailableItems.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableItems);
