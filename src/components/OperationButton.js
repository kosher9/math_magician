import React from 'react';
import PropTypes from 'prop-types';
import './OperationButton.css';

class OperationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { output } = this.props;
    return (
      <div className="OpButton-Ctn">
        <span>{output}</span>
      </div>
    );
  }
}

OperationButton.propTypes = {
  output: PropTypes.string.isRequired,
};

export default OperationButton;
