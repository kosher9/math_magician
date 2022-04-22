import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleButtonClick(e) {
    this.props.handleButtonClick({x: '', y: e.target.innerText})
    let data = {
      total: this.state.total,
      next: this.state.next,
      operation: this.state.operation,
    }
    const {total, next, operation} = calculate(data, e.target.innerText)
    this.setState({total: total, next: next, operation: operation})
    
    if(total !== null && next === null && operation === null) {
      this.props.handleButtonClick({x: 'clear', y: total})
    } else if (total === null && next !== null && operation === undefined) {
      this.props.handleButtonClick({x: 'old', y: next})
    }
  }

  handleClear() {
    this.props.handleButtonClick('clear')
  }

  handleOperation(e){
    this.props.handleOperation(e.target.innerText)
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
            <div className="btn orange" onClick={this.handleButtonClick} ><span>=</span></div>
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
