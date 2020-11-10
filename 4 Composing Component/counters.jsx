import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  handleIncrement = this.props.handleIncrement;
  handleDelete = this.props.handleDelete;
  handleRest = this.props.handleRest;
  handleDecrement = this.props.handleDecrement;

  render() {
    return (
      <div>
        <button
          onClick={this.handleRest}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
