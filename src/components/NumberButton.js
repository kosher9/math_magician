import React from 'react';
import PropTypes from 'prop-types';
import './NumberButton.css';

class CalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { output } = this.props;
    return (
      <div className="CalButton-Ctn">
        <span>{output}</span>
      </div>
    );
  }
}

CalButton.propTypes = {
  output: PropTypes.string.isRequired,
};

export default CalButton;
