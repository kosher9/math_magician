import React from 'react';
import PropTypes from 'prop-types';
import './Output.css';

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { output } = this.props;
    return (
      <div className="Output-Ctn">
        <span>{output}</span>
      </div>
    );
  }
}

Output.propTypes = {
  output: PropTypes.string.isRequired,
};

export default Output;
