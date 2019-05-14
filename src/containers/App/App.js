import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';

@withRouter
class App extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired
  };

  state = {
    prevProps: this.props // eslint-disable-line react/no-unused-state
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { route } = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        APP EN PRUEBAS
        <div className={styles.appContent}>
          {renderRoutes(route.routes)}
        </div>
      </div>
    );
  }
}

export default App;
