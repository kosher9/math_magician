import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(e) {
    this.props.handleButtonClick(e.target.innerText)
  }

  render() {
    return (
      <div className="Calculator">
        <div className="Calculator-Ctn">
          <div className="Calculator-Row">
            <span className="output">{this.props.output}</span>
          </div>
          <div className="Calculator-Row num-op">
            <div className="btn" onClick={this.handleButtonClick}><span>AC</span></div>
            <div className="btn" onClick={this.handleButtonClick}><span>+/-</span></div>
            <div className="btn" onClick={this.handleButtonClick}><span>%</span></div>
            <div className="btn orange" onClick={this.handleButtonClick}><span>÷</span></div>
          </div>
          <div className="Calculator-Row num-op">
            <div className="btn" onClick={this.handleButtonClick}><span>7</span></div>
            <div className="btn" onClick={this.handleButtonClick}><span>8</span></div>
            <div className="btn" onClick={this.handleButtonClick}><span>9</span></div>
            <div className="btn orange" onClick={this.handleButtonClick}><span>x</span></div>
          </div>
          <div className="Calculator-Row num-op">
            <div className="btn" onClick={this.handleButtonClick}><span>4</span></div>
            <div className="btn" onClick={this.handleButtonClick}><span>5</span></div>
            <div className="btn" onClick={this.handleButtonClick}><span>6</span></div>
            <div className="btn orange" onClick={this.handleButtonClick}><span>-</span></div>
          </div>
          <div className="Calculator-Row num-op">
            <div className="btn" onClick={this.handleButtonClick}><span>1</span></div>
            <div className="btn" onClick={this.handleButtonClick}><span>2</span></div>
            <div className="btn" onClick={this.handleButtonClick}><span>3</span></div>
            <div className="btn orange" onClick={this.handleButtonClick}><span>+</span></div>
          </div>
          <div className="Calculator-Row num-op">
            <div className="btn" onClick={this.handleButtonClick}><span>0</span></div>
            <div className="btn" onClick={this.handleButtonClick}><span>.</span></div>
            <div className="btn orange" onClick={this.handleButtonClick}><span>=</span></div>
          </div>
        </div>
      </div>
    );
  }
}

Calculator.defaultProps = {
  output: '0'
}

export default Calculator;
