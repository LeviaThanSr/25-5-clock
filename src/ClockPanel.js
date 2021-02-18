import React, { Component } from "react";

class ClockPanel extends Component {
  render() {
    return (
      <div className="clockPanel text-center">
        <h1 className="title">Session</h1>
        <h3 className="time">25:00</h3>
        <div className="controlBtn d-flex justify-content-center align-items-center">
          <div
            className="btn btn-primary"
            onClick={this.props.handleResumePause}
          >
            <i className="fas fa-play" />
          </div>

          <div className="btn btn-warning" onClick={this.props.handleReset}>
            <i className="fas fa-undo" />
          </div>
        </div>
      </div>
    );
  }
}

export default ClockPanel;
