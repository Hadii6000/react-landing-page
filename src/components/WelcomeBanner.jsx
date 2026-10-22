import { Component } from 'react';

class WelcomeBanner extends Component {
  state = {
    visible: true,
  };

  handleClose = () => {
    this.setState({ visible: false });
  };

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <div className="welcome-banner">
        <p>{this.props.message}</p>
        <button type="button" onClick={this.handleClose}>
          Dismiss
        </button>
      </div>
    );
  }
}

export default WelcomeBanner;
