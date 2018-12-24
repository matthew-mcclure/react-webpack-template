import React from 'react';
import PropTypes from 'prop-types';
import SideMenuItem from './SideMenuItem';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.getMenuItems = this.getMenuItems.bind(this);

    this.state = {
      menuItems: this.getMenuItems(),
    };
  }

  getMenuItems() {
    const menuItems = [
      ['Home', '/'],
      ['About', '/about'],
      ['Scrollable', '/scrollable']
    ];
    return menuItems;
  }

  render() {
    return (
      <div className={`side-menu-container ${this.props.visible ? "visible" : ""}`}>
        {this.state.menuItems.map((item) => {
          return <SideMenuItem handleClick={this.props.toggleSideMenu} link={item[1]} key={item[0]} text={item[0]} />
        })}
      </div>
    )
  }
};

SideMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default SideMenu;
