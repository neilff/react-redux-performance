import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

function mapStateToProps(state) {
  return {
    debug: state.debug,
  };
}

function CounterRenders({ debug }) {
  return (
    <div
      style={{ width: 300, overflow: 'auto' }}
      className="fixed border bottom-0 left-0 p2 m2">
      <span>Render Counts</span>
      <pre
        className="bg-silver p2"
        style={{ overflow: 'auto' }}>
        { JSON.stringify(debug, null, 2) }
      </pre>
    </div>
  );
}

CounterRenders.displayName = 'CounterRenders';
CounterRenders.propTypes = {
  debug: PropTypes.instanceOf(Map),
};
CounterRenders.defaultProps = {};

export default connect(
  mapStateToProps,
)(CounterRenders);
