import React, { Component } from "react";
import BreakPanel from "./BreakPanel";
import SessionPanel from "./SessionPanel";
class Clock extends Component {
  render() {
    const Break = {
      name: "Break Time",
      time: 5,
      handleIncrement: this.handleBreakIncrement,
      handleDecrement: this.handleBreakDecrement,
    };
    const Session = {
      name: "Study Time",
      time: 25,
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
            <div>Clock body</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Clock;
