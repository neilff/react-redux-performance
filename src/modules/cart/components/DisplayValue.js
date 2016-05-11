import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state, ownProps) {
  return {
    value: ownProps.selector(state),
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

export class DisplayValue extends Component {
  componentWillReceiveProps() {
    this.props.renderComponent(this.props.id);
  }

  render() {
    const { value } = this.props;

    return (
      <div className="mb1 mt1">
        ${ value.toFixed(2) }
      </div>
    );
  }
}

DisplayValue.displayName = 'DisplayValue';
DisplayValue.propTypes = {
  value: PropTypes.number,
  renderComponent: PropTypes.func,
  id: PropTypes.string,
};
DisplayValue.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayValue);
