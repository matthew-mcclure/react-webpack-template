import React from 'react';

class Scrollable extends React.Component {
  render() {
    return (
      <div className="scrollable-component-container">
        <div className="black-background">
          <h1>Black divider</h1>
        </div>
        <div className="color-1">
          <h1>Fun colors</h1>
        </div>
        <div className="black-background">
          <h1>Another black divider</h1>
        </div>
        <div className="color-2">
          <h1>More fun colors</h1>
        </div>
      </div>
    )
  }
};

export default Scrollable;
