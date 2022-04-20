import React from 'react';
import PropTypes from 'prop-types';
import './EqualButton.css';

class EqualButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { output } = this.props;
    return (
      <div className="EqButton-Ctn">
        <span>{output}</span>
      </div>
    );
  }
}

EqualButton.propTypes = {
  output: PropTypes.string.isRequired,
};

export default EqualButton;
