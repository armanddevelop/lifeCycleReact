import React, { Component } from "react";
import CustomLabel from "./components/CustomLabel";

class App extends Component {
  //incializacion
  constructor(props) {
    super(props);
    this.state = { nombre: "Nallely Aguilar", num: 0, age: 32 };
    console.log("Constructor paso 1");
  }

  //Mounting
  //metodo deprecado por eso tiene UNSAFE_
  UNSAFE_componentWillMount() {
    console.log("Segunda Fase componentWillMount");
  }

  componentDidMount() {
    console.log("Segunda Fase componentDidMount");
  }

  //metodo deprecado por eso tiene UNSAFE_
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("Segunda fase componentWillReceiveProps");
    console.log("Segunda fase nextProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Segunda false shouldComponentUpdate");
    console.log("Segunda false nextProps", nextProps);
    console.log("Segunda false nextState", nextState);
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("Segunda false componentWillUpdate");
    console.log("Segunda false nextProps", nextProps);
    console.log("Segunda false nextState", nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("Segunda false componentDidUpdate");
    console.log("Segunda false nextProps", nextProps);
    console.log("Segunda false nextState", nextState);
  }
  //ultima fase Unmouting
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  _addCount = () => {
    let { num } = this.state;
    num++;
    this.setState({
      num
    });
    /*this.setState(
      prevState => {
        return { num: ++prevState.num };
      },
      () => {
        console.log("Termine de actualizar el state");
      }
    );*/
  };

  render() {
    console.log("Segunda fase el render");
    let { num } = this.state;
    return (
      <div className="App">
        <p>Contador: {num}</p>
        <button onClick={this._addCount}>+</button>
        {num < 3 && <CustomLabel num={num}></CustomLabel>}
      </div>
    );
  }
}

export default App;
