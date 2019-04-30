import React from "react";
import bookbuddylogo from "../images/bookbuddylogoresize.png";

class Header extends React.Component {
  render() {
    return (
      <div
        className="headerNav"
      >
        <img
          src={bookbuddylogo}
          size='medium'
          className="headerImg"
          alt="logo"
        />
      </div>
    );
  }
}

export default Header;
