import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = { text: '0' };
  }

  handleButtonClick({ x, y }) {
    if (x === 'clear') {
      this.setState({ text: y });
      return;
    }
    if (x === 'old') {
      this.setState({ text: y });
      return;
    }
    if (this.state.text === '0' && y === '0') {
      this.setState({ text: y });
    } else if (y !== '0' && this.state.text === '0') {
      this.setState({ text: y });
    } else {
      this.setState({ text: this.state.text + y });
    }
  }

  handleClear() {
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="App">
        <div className="App-Ctn">
          <Calculator
            output={this.state.text}
            handleButtonClick={this.handleButtonClick}
            handleClear={this.handleClear}
          />
        </div>
      </div>
    );
  }
}

export default App;
