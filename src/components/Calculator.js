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
          <div className="Calculator-Row">0</div>
          <div className="Calculator-Row">
            <div>AC</div>
            <div>+/-</div>
            <div>%</div>
            <div>÷</div>
          </div>
          <div className="Calculator-Row">
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>x</div>
          </div>
          <div className="Calculator-Row">
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>-</div>
          </div>
          <div className="Calculator-Row">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>+</div>
          </div>
          <div className="Calculator-Row">
            <div>0</div>
            <div>.</div>
            <div>=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
