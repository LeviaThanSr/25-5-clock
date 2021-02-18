import React, { Component } from "react";
import BreakPanel from "./BreakPanel";
import SessionPanel from "./SessionPanel";
import ClockPanel from "./ClockPanel";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BreakLength: 5,
      SessionLength: 25,
      ClockTime: 25 * 60,
      ClockTitle: "Session Title",
    };
  }
  handleConvert(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }
  render() {
    const Break = {
      name: "Break Time",
      time: this.state.BreakLength,
      handleIncrement: this.handleBreakIncrement,
      handleDecrement: this.handleBreakDecrement,
    };
    const Session = {
      name: "Study Time",
      time: this.state.SessionLength,
      handleIncrement: this.handleSessionIncrement,
      handleDecrement: this.handleSessionDecrement,
    };
    return (
      <div>
        <div className="card shadow rounded">
          <div className="card-header">
            <div className="d-flex justify-content-center align-items-center">
              <BreakPanel
                name={Break.name}
                time={Break.time}
                handleIncrement={Break.handleIncrement}
                handleDecrement={Break.handleDecrement}
              />
              <SessionPanel
                name={Session.name}
                time={Session.time}
                handleIncrement={Session.handleIncrement}
                handleDecrement={Session.handleDecrement}
              />
            </div>
          </div>
          <div className="card-body">
            <ClockPanel
              ClockTitle={this.state.ClockTitle}
              ClockTime={this.handleConvert(this.state.ClockTime)}
              handleResumePause={this.handleResumePause}
              handleReset={this.handleReset}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Clock;
