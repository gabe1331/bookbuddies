import React, { Component } from "react";
import { logout } from "../Redux/Actions/ActLogout";
import { to_main, to_profile } from "../Redux/Actions/ActNavBar";
import { getAllBooks } from '../Redux/Actions/ActBooks';
import { connect } from "react-redux";

export class NavBar extends Component {
  render() {
    return (
      <nav
        className="stickyMenu"
      >
        <ul>
            <button
              onClick={this.props.to_profile}
              style={{ backgroundColor: "#86C232", color: "white" }}
            >
              Profile
            </button>
                <button
                onClick={this.props.to_main}
                style={{ backgroundColor: "#86C232", color: "white" }}
                >
                Main Page
                </button>
            <button
                onClick={this.props.logout}
                style={{ backgroundColor: "#86C232", color: "white" }}
            >
                Logout
            </button>
        </ul>
    </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    logout: {},
    to_profile: {},
    to_main: {}
  };
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    },
    to_profile: () => {
      dispatch(to_profile());
    },
    to_main: () => {
      dispatch(to_main());
    },
    getAllBooks: () => {
      dispatch(getAllBooks());
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
export default Connect;
