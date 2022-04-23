import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

function Calculator() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [output, setOutput] = useState('0');

  function handleButtonClick(e) {
    const result = calculate(data, e.target.innerText);
    setData(result);
    const a = e.target.innerText;
    if (a === 'AC') {
      setOutput('0');
      return;
    }
    const { total, next, operation } = result;
    if (total === null && next !== null && output === '0') {
      setOutput(next);
    } else if (total !== null && next === null && operation === null) {
      setOutput(total);
    } else {
      setOutput(output + a);
    }
  }

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
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>AC</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>+/-</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>%</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn orange"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>÷</span>
          </div>
        </div>
        <div className="Calculator-Row num-op">
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>7</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>8</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>9</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn orange"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>x</span>
          </div>
        </div>
        <div className="Calculator-Row num-op">
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>4</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>5</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>6</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn orange"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>-</span>
          </div>
        </div>
        <div className="Calculator-Row num-op">
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>1</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>2</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>3</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn orange"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>+</span>
          </div>
        </div>
        <div className="Calculator-Row num-op">
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>0</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>.</span>
          </div>
          <div
            fo
            role="button"
            tabIndex={0}
            className="btn orange"
            onClick={handleButtonClick}
            onKeyDown={handleButtonClick}
          >
            <span>=</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
