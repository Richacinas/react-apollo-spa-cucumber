import React, { Component } from 'react';
import kitten from './kitten.jpg';

class About extends Component {
  state = { showKitten: false };

  handleToggleKitten = () => {
    const { showKitten } = this.state;

    this.setState({ showKitten: !showKitten });
  };

  render() {
    const { showKitten } = this.state;

    return (
      <div className="container">
        <h1>About Us</h1>

        <h3>Images</h3>

        <p>
          Psst! Would you like to see a kitten?
          <button
            type="button"
            className={`btn btn-${showKitten ? 'danger' : 'success'}`}
            style={{ marginLeft: 50 }}
            onClick={this.handleToggleKitten}
          >
            {showKitten ? 'No! Take it away!' : 'Yes! Please!'}
          </button>
        </p>

        {showKitten && (
          <div>
            <img src={kitten} alt="kitchen" />
          </div>
        )}
      </div>
    );
  }
}

export default About;
