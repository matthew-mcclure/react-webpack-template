import React from 'react';
import PropTypes from 'prop-types';

class HamburgerIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`hamburger-container ${this.props.expanded ? "expanded" : ""}`} onClick={this.props.toggleMenu}>
        <div className="hamburger-bar-top"></div>
        <div className="hamburger-bar-middle"></div>
        <div className="hamburger-bar-bottom"></div>
      </div>
    )
  }
};

HamburgerIcon.propTypes = {
  expanded: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default HamburgerIcon;
