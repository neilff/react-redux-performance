import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { taxRates } from 'modules/cart/constants';
import { getSelectedState, getTotalTax } from 'modules/cart/selectors';

function mapStateToProps(state) {
  return {
    currentState: getSelectedState(state),
    totalTax: getTotalTax(state),
  };
}

import * as cartActions from 'modules/cart/actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...cartActions,
  }, dispatch);
}

export class TaxCalculator extends Component {
  render() {
    const { currentState, selectState, totalTax } = this.props;

    return (
      <div className="mb1 mt1">
        <span className="bold mr2">${ totalTax.toFixed(2) }</span>
        <span>
          <select
            value={ currentState }
            onChange={ (e) => selectState(e.target.value) }>
            {
              Object.keys(taxRates).map((key) => (
                <option
                  key={ key }
                  value={ key }>
                  { `${ key } (${ taxRates[key] * 100 }%)` }
                </option>
              ))
            }
          </select>
        </span>
      </div>
    );
  }
}

TaxCalculator.displayName = 'TaxCalculator';
TaxCalculator.propTypes = {
  totalTax: PropTypes.number,
  taxPercent: PropTypes.number,
  currentState: PropTypes.string,
  selectState: PropTypes.func,
};
TaxCalculator.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaxCalculator);
