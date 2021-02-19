import React, { Component } from "react";

class SessionPanel extends Component {
  render() {
    const { name, time, handleIncrement, handleDecrement } = this.props;

    return (
      <div className="controlPanel text-center">
        <h1 className="name text-center" id="session-label">
          {name}
        </h1>
        <div className="controlBtn  d-flex justify-content-center align-items-center">
          <div
            className="btn btn-danger"
            id="session-decrement"
            onClick={handleDecrement}
          >
            <i className="fas fa-minus" />
          </div>
          <h3 className="time" id="session-length">
            {time}
          </h3>
          <div
            className="btn btn-primary"
            id="session-increment"
            onClick={handleIncrement}
          >
            <i className="fas fa-plus" />
          </div>
        </div>
      </div>
    );
  }
}

export default SessionPanel;
