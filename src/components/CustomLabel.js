import React, { Component } from "react";

class CustomLabel extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("UNSAFE_componentWillReceiveProps de CustomLabel", nextProps);
  }
  componentWillUnmount() {
    console.log("CustomLabel componentWillUnmount");
  }
  render() {
    let { num } = this.props;
    return <div>Labul Custom: {num}</div>;
  }
}

export default CustomLabel;
