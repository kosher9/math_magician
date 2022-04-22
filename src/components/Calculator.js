import React from 'react';
import PropTypes from 'prop-types';
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
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const handleButton = { x: '', y: '' };
    handleButton.x = '';
    handleButton.y = e.target.innerText;
    let { total, next, operation } = this.state;
    const data = calculate({ total, next, operation }, e.target.innerText);
    total = data.total;
    next = data.next;
    operation = data.operation;
    this.setState({ total, next, operation });

    const { handleButtonClick } = this.props;
    if (total === null && next === null && operation === null) {
      const x = 'clear';
      const y = '0';
      handleButtonClick({ x, y });
    } else if (total !== null && next === null && operation === null) {
      const x = 'clear';
      const y = total;
      handleButtonClick({ x, y });
    } else if (total === null && next && next.length === 1 && operation === undefined) {
      const x = 'old';
      const y = next;
      handleButtonClick({ x, y });
    } else {
      const x = '';
      const y = e.target.innerText;
      handleButtonClick({ x, y });
    }
  }

  render() {
    const { output } = this.props;
    return (
      <div className="Calculator">
        <div className="Calculator-Ctn">
          <div className="Calculator-Row">
            <span className="output">{output}</span>
          </div>
          <div className="Calculator-Row num-op">
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>AC</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>+/-</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>%</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn orange"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>÷</span>
            </div>
          </div>
          <div className="Calculator-Row num-op">
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>7</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>8</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>9</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn orange"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>x</span>
            </div>
          </div>
          <div className="Calculator-Row num-op">
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>4</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>5</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>6</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn orange"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>-</span>
            </div>
          </div>
          <div className="Calculator-Row num-op">
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>1</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>2</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>3</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn orange"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>+</span>
            </div>
          </div>
          <div className="Calculator-Row num-op">
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>0</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="btn"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>.</span>
            </div>
            <div
              fo
              role="button"
              tabIndex={0}
              className="btn orange"
              onClick={this.handleButtonClick}
              onKeyDown={this.handleButtonClick}
            >
              <span>=</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Calculator.defaultProps = {
  output: '0',
  handleButtonClick: {
    x: '',
    y: '',
  },
};

Calculator.propTypes = {
  output: PropTypes.string,
  handleButtonClick: {
    x: PropTypes.string,
    y: PropTypes.string,
  }.PropTypes,
};

export default Calculator;
