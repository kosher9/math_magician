import React from 'react';
import './Calculator.css';

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
            <span className="output">0</span>
          </div>
          <div className="Calculator-Row num-op">
            <div className="btn"><span>AC</span></div>
            <div className="btn"><span>+/-</span></div>
            <div className="btn"><span>%</span></div>
            <div className="btn orange"><span>÷</span></div>
          </div>
          <div className="Calculator-Row num-op">
            <div className="btn"><span>7</span></div>
            <div className="btn"><span>8</span></div>
            <div className="btn"><span>9</span></div>
            <div className="btn orange"><span>x</span></div>
          </div>
          <div className="Calculator-Row num-op">
            <div className="btn"><span>4</span></div>
            <div className="btn"><span>5</span></div>
            <div className="btn"><span>6</span></div>
            <div className="btn orange"><span>-</span></div>
          </div>
          <div className="Calculator-Row num-op">
            <div className="btn"><span>1</span></div>
            <div className="btn"><span>2</span></div>
            <div className="btn"><span>3</span></div>
            <div className="btn orange"><span>+</span></div>
          </div>
          <div className="Calculator-Row num-op">
            <div className="btn"><span>0</span></div>
            <div className="btn"><span>.</span></div>
            <div className="btn orange"><span>=</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
