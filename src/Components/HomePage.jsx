// when making a new component, every component needs to import react and connect, to properly make component and connect to redux store
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Login from "./Login";

import Register from "./Register";

class HomePage extends React.Component {
  render() {
    return (
      <div
        id="homepagecontainer"
      >
        <Header />

        <section>
          <div>
            <div className="row">

              <div
                id="divider"
                className="loginRegister"
              >
                <div
                  size="tiny"
                  trigger={
                    <button
                      style={{
                        backgroundColor: "#86C232",
                        color: "white",
                        marginBottom: "5vh",
                        marginTop: "1vh"
                      }}
                    >
                      Login
                    </button>
                  }
                >
                  <Login />
                </div>

                <Register />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

function mapDispatchToProps(dispatch) {
  return {};
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
export default Connect;
