import React, { Component } from "react";
import BreakPanel from "./BreakPanel";
import SessionPanel from "./SessionPanel";
import ClockPanel from "./ClockPanel";

const beep = document.getElementById("beep");
class Clock extends Component {
  constructor(props) {
    super(props);
    this.counter = undefined;
    this.state = {
      BreakLength: 5,
      SessionLength: 25,
      ClockTime: 1500,
      ClockTitle: "Study Time",
      isOn: false,
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleResumePause = this.handleResumePause.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
  }

  handleConvert(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }
  handleReset() {
    this.setState({
      BreakLength: 5,
      SessionLength: 25,
      ClockTime: 1500,
      ClockTitle: "Study Time",
      isOn: false,
    });
    clearInterval(this.counter);
    beep.pause();
    beep.currentTime = 0;
  }
  componentWillUnmount() {
    clearInterval(this.counter);
  }
  handleResumePause() {
    if (!this.state.isOn) {
      this.counter = setInterval(() => {
        if (this.state.ClockTime === 0) {
          this.setState({
            ClockTitle:
              this.state.ClockTitle === "Study Time"
                ? "Break Time"
                : "Study Time",
            ClockTime:
              this.state.ClockTitle === "Study Time"
                ? this.state.BreakLength * 60
                : this.state.SessionLength * 60,
          });
          beep.play();
        } else {
          this.setState({
            ClockTime: this.state.ClockTime - 1,
          });
        }
      }, 1000);
      this.setState({
        isOn: true,
      });
    } else {
      clearInterval(this.counter);
      this.setState({
        isOn: false,
      });
    }
  }
  handleBreakIncrement() {
    if (this.state.BreakLength <= 59) {
      this.setState({
        BreakLength: this.state.BreakLength + 1,
      });
    }
  }
  handleBreakDecrement() {
    if (this.state.BreakLength > 1) {
      this.setState({
        BreakLength: this.state.BreakLength - 1,
      });
    }
  }
  handleSessionIncrement() {
    if (this.state.SessionLength <= 59) {
      this.setState({
        SessionLength: this.state.SessionLength + 1,
      });
    }
  }
  handleSessionDecrement() {
    if (this.state.SessionLength > 1) {
      this.setState({
        SessionLength: this.state.SessionLength - 1,
      });
    }
  }
  render() {
    const Break = {
      name: "Break Length",
      time: this.state.BreakLength,
      handleIncrement: this.handleBreakIncrement,
      handleDecrement: this.handleBreakDecrement,
    };
    const Session = {
      name: "Study Length",
      time: this.state.SessionLength,
      handleIncrement: this.handleSessionIncrement,
      handleDecrement: this.handleSessionDecrement,
    };
    const Clock = {
      ClockTitle: this.state.ClockTitle,
      ClockTime: this.handleConvert(this.state.ClockTime),
      handleResumePause: this.handleResumePause,
      handleReset: this.handleReset,
      isOn: this.state.isOn,
    };
    return (
      <div>
        <div className="card shadow rounded">
          <div className="card-header">
            <div className="d-flex justify-content-center align-items-center">
              <BreakPanel {...Break} />
              <SessionPanel {...Session} />
            </div>
          </div>
          <div className="card-body">
            <ClockPanel {...Clock} />
          </div>
        </div>
      </div>
    );
  }
}
export default Clock;
