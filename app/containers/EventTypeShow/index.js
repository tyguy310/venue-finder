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

import MapContainer from '../../components/MapContainer';

import makeSelectEventTypeShow from './selectors';
// import { makeSelectEventTypeShow, makeGetLocationSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
// import getLocation from './actions';

export class EventTypeShow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    console.log();
  }

  render() {
    const { eventtype } = this.props.match.params;
    // const { coords: { latitude, longitude } } = this.props.location;
    return (
      <div style={{ position: 'relative' }}>
        <Helmet>
          <title>{eventtype}</title>
          <meta name="description" content="Description of EventTypeShow" />
        </Helmet>
        <h3>
          {eventtype}
          {/* <div>Coords: {this.props.userlocation}</div> */}
          {/* <div>{longitude}</div> */}
        </h3>
        <FormattedMessage {...messages[eventtype]} />
        <MapContainer />
      </div>
    );
  }
}

EventTypeShow.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      eventtype: PropTypes.string,
    }),
  }),
  // onGetLocation: PropTypes.function,
  // getLocation: PropTypes.function,
  // userlocation: PropTypes.shape({
  //   coords: PropTypes.shape({
  //     latitude: PropTypes.string,
  //     longitude: PropTypes.string,
  //   }),
  // }),
};

const mapStateToProps = createStructuredSelector({
  eventtypeshow: makeSelectEventTypeShow(),
  // userlocation: makeGetLocationSelector,
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
