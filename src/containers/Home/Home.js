import React, { Component } from 'react';

class Home extends Component {

  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        HOME sweet HOME
      </div>
    );
  }
}

export default Home;
