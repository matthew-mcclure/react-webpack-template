import React from 'react';
import HamburgerIcon from './HamburgerIcon';
import SideMenu from './SideMenu';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSideMenu = this.toggleSideMenu.bind(this);

    this.state = {
      sideMenuVisible: false,
    };
  }

  toggleSideMenu() {
    this.setState({sideMenuVisible: !this.state.sideMenuVisible});
  }

  render() {
    return (
      <div className="navigation-component-container">
        <SideMenu toggleSideMenu={this.toggleSideMenu} visible={this.state.sideMenuVisible} />
        <HamburgerIcon expanded={this.state.sideMenuVisible} toggleMenu={this.toggleSideMenu} />
      </div>
    )
  }
};

export default Navigation;
