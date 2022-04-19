import React from 'react';
import CalButton from './NumberButton';
import './Calculator.css';
import OperationButton from './OperationButton';
import Output from './Output';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Calculator">
        <div className="Calculator-Ctn">
          <div className="Calculator-Row">
            <Output output="0" />
          </div>
          <div className="Calculator-Row">
            <CalButton output="AC" />
            <CalButton output="+/-" />
            <CalButton output="%" />
            <OperationButton output="÷" />
          </div>
          <div className="Calculator-Row">
            <CalButton output="7" />
            <CalButton output="8" />
            <CalButton output="9" />
            <OperationButton output="x" />
          </div>
          <div className="Calculator-Row">
            <CalButton output="4" />
            <CalButton output="5" />
            <CalButton output="6" />
            <OperationButton output="-" />
          </div>
          <div className="Calculator-Row">
            <CalButton output="1" />
            <CalButton output="2" />
            <CalButton output="3" />
            <OperationButton output="+" />
          </div>
          <div className="Calculator-Row">
            <CalButton output="0" />
            <CalButton output="." />
            <OperationButton output="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
