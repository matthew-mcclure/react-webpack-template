import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return (
      <div className="side-menu-item">
        <Link onClick={this.props.handleClick} to={this.props.link}>{this.props.text}</Link>
      </div>
    )
  }
};

Navigation.propTypes = {
  handleClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Navigation;
