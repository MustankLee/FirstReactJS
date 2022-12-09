import React, { Component } from "react";

export class ThirdPart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  programCounter(operation) {
    // this.setState({
    //     count: this.state.count + 1
    // }, () => this.funcCallBack())
    if (operation === 1) {
      this.increment();
    } else if (operation === 2) {
      this.reset();
    } else {
      this.decrement();
    }
  }

  render() {
    return (
      <div className="w-100 general-height d-flex justify-content-center">
        <div className="py-4 text-light text-center w-75">
          <h1 className="fw-bold py-2">Program Counter</h1>
          <div className="d-flex w-100 gap-4 justify-content-center my-4">
            <button
              className="rounded p-2 btn-active"
              onClick={() => this.programCounter(1)}
            >
              Increment
            </button>
            <button
              className="rounded p-2 btn-active"
              onClick={() => this.programCounter(2)}
            >
              Reset
            </button>
            <button
              className="rounded p-2 btn-active"
              onClick={() => this.programCounter(3)}
            >
              Decrement
            </button>
          </div>
          <div className="block-ctr rounded d-flex align-items-center justify-content-center">
            <h1 className="ctr-number">{this.state.count}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdPart;
