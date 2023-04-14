import React from "react";

export default class MyCounter extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
        };
    
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
      }
    
      handleIncrement() {
        this.setState({ count: this.state.count + 1 });
      }
    
      handleDecrement() {
        this.setState({ count: this.state.count - 1 });
      }
    
      render() {
        return (
          <div>
            <button onClick={this.handleIncrement}>+</button>
            <label>{this.state.count}</label>
            <button onClick={this.handleDecrement}>-</button>
          </div>
        );
      }
}