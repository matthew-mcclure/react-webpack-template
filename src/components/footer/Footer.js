import React from 'react';

import FooterItem from './FooterItem';
import SocialMediaIconRow from './SocialMediaIconRow';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-component-container">
        <div className="two-columns">
          <div>
            <FooterItem header={true} text="Site Navigation" />
            <FooterItem link="/" text="Home" />
            <FooterItem link="/about" text="About" />
            <FooterItem link="/" text="More" />
          </div>
          <div>
            <FooterItem header={true} text="Support" />
            <FooterItem link="/" text="Contact Us" />
            <FooterItem link="/faqs" text="FAQs" />
            <FooterItem link="/" text="Terms and Conditions" />
          </div>
        </div>

        <div className="footer-item center">
          <p className="bold underline">Follow Us on Social Media</p>
          <SocialMediaIconRow />
        </div>
      </footer>
    )
  }
};

export default Footer;
