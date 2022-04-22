import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { text: '0' };
  }

  handleButtonClick({ x, y }) {
    const { text } = this.state;
    if (x === 'clear') {
      this.setState({ text: y });
      return;
    }
    if (x === 'old') {
      this.setState({ text: y });
      return;
    }
    if (text === '0' && y === '0') {
      this.setState({ text: y });
    } else if (y !== '0' && text === '0') {
      this.setState({ text: y });
    } else {
      this.setState({ text: text + y });
    }
  }

  render() {
    const { text } = this.state;
    return (
      <div className="App">
        <div className="App-Ctn">
          <Calculator
            output={text}
            handleButtonClick={this.handleButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
