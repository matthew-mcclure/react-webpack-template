import React from 'react';
import PropTypes from 'prop-types';

class FooterItem extends React.Component {
  render() {
    return (
      <div className="footer-item">
        {this.props.link ?
          <a className={`footer-link ${this.props.header ? "bold underline" : ""}`} href={this.props.link}>{this.props.text}</a>
          :
          <p className={`footer-text ${this.props.header ? "bold underline" : ""}`}>{this.props.text}</p>
        }
      </div>
    )
  }
};

FooterItem.defaultProps = {
  header: false,
};

FooterItem.propTypes = {
  header: PropTypes.bool,
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default FooterItem;
