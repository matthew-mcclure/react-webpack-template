import React from 'react';
import icons from '../../assets/social-icons/index';

class SocialMediaIconRow extends React.Component {
  render() {
    const socialLinks = {
      facebook: {
        icon: icons.facebookIcon,
        link: 'https://facebook.com',
      },
      twitter: {
        icon: icons.twitterIcon,
        link: 'https://twitter.com',
      },
      youtube: {
        icon: icons.youTubeIcon,
        link: 'https://youtube.com',
      },
    };

    return (
      <div className="social-media-icon-row">
        {Object.keys(socialLinks).map((siteName) => {
          return (
            <a key={siteName} href={socialLinks[siteName].link}>
              <img className="social-media-icon-img" src={socialLinks[siteName].icon} />
            </a>
          )
        })}
      </div>
    )
  }
};

export default SocialMediaIconRow;
