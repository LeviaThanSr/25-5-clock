import React, { Component } from "react";
class ClockPanel extends Component {
  render() {
    const {
      isItLessThanOne,
      ClockTime,
      ClockTitle,
      isOn,
      handleResumePause,
      handleReset,
    } = this.props;

    return (
      <div className="clockPanel text-center">
        <h1
          className="title"
          id="timer-label"
          style={{ color: isItLessThanOne < 60 ? "red" : "black" }}
        >
          {ClockTitle}
        </h1>
        <h3
          className="time"
          id="time-left"
          style={{ color: isItLessThanOne < 60 ? "red" : "black" }}
        >
          {ClockTime}
        </h3>
        <div className="controlBtn2 d-flex justify-content-center align-items-center">
          <div
            className="btn btn-primary"
            id="start_stop"
            onClick={handleResumePause}
          >
            <i className={`fas fa-${isOn ? "pause" : "play"}`} />
          </div>

          <div className="btn btn-warning" id="reset" onClick={handleReset}>
            <i className="fas fa-undo" />
          </div>
        </div>
      </div>
    );
  }
}

export default ClockPanel;
