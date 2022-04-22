import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.state = {text: '0'}
  }

  handleButtonClick(newText) {
    if(this.state.text === '0' && newText !== '0') {
      this.setState({text: newText})
    } else {
      this.setState({text: this.state.text + newText})
    }
    
  }

  render() {
    return (
      <div className="App">
        <div className="App-Ctn">
          <Calculator output={this.state.text} handleButtonClick={this.handleButtonClick}/>
        </div>
      </div>
    );
  }
  
}

export default App;
