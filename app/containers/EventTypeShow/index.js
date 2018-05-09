/**
 *
 * EventTypeShow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEventTypeShow from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class EventTypeShow extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { eventtype } = this.props.match.params;

    return (
      <div>
        <Helmet>
          <title>{eventtype}</title>
          <meta name="description" content="Description of EventTypeShow" />
        </Helmet>
        <h3>{eventtype}</h3>
        <FormattedMessage {...messages[eventtype]} />
      </div>
    );
  }
}

EventTypeShow.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      eventtype: React.PropTypes.string,
    }),
  }),
};

const mapStateToProps = createStructuredSelector({
  eventtypeshow: makeSelectEventTypeShow(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'eventTypeShow', reducer });
const withSaga = injectSaga({ key: 'eventTypeShow', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventTypeShow);
