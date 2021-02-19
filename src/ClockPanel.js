import React, { Component } from "react";

class ClockPanel extends Component {
  render() {
    return (
      <div className="clockPanel text-center">
        <h1 className="title" id="timer-label">
          {this.props.ClockTitle}
        </h1>
        <h3 className="time" id="time-left">
          {this.props.ClockTime}
        </h3>
        <div className="controlBtn2 d-flex justify-content-center align-items-center">
          <div
            className="btn btn-primary"
            id="start_stop"
            onClick={this.props.handleResumePause}
          >
            <i className={`fas fa-${this.props.isOn ? "pause" : "play"}`} />
          </div>

          <div
            className="btn btn-warning"
            id="reset"
            onClick={this.props.handleReset}
          >
            <i className="fas fa-undo" />
          </div>
        </div>
      </div>
    );
  }
}

export default ClockPanel;
