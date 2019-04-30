import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../Redux/Actions/ActLoginRegister";

const initialState = {
  username: "",
  password: ""
};
class Login extends Component {
  state = {
    ...initialState
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
    this.setState({ ...initialState });
  };

  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEnter = event => {
    if (event.key === "Enter") {
    }
  };

  render() {
    return (
      <div>
        <form>
          <p className="loginHeader">
            <b>Login</b>
          </p>

          <input
            autoFocus={true}
            className="username"
            placeholder="Username"
            autoComplete="username"
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.updateInput}
          />
          <input
            className="password"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            value={this.state.password}
            name="password"
            onChange={this.updateInput}
            onKeyPress={this.handleEnter}
          />

          <button
            className="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    }
  };
}
const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
export default Connect;
