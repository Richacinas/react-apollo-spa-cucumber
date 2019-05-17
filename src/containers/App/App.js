import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import styles from './App.scss';

@withRouter
class App extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { route } = this.props;

    return (
      <div className="app">
        APP EN PRUEBAS
        <div className="appContent">{renderRoutes(route.routes)}</div>
      </div>
    );
  }
}

export default App;
