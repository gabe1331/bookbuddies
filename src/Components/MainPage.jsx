import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import NavBar from "./NavBar.jsx";
import AddBook from "./AddBook";
import BookShelf from "./BookShelf";
import  SearchBar  from "./SearchBar";
import { logout } from "../Redux/Actions/ActLogout";
import bookbuddyicon from "../images/bookbuddyicon.png";

class MainPage extends React.Component {
  componentDidMount() {
    if (!this.props.userInfo.loginSuccess) {
      this.props.logout();
    }
  }
  
  render() {
    const { username, about } = this.props.userInfo;
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <div celled="internally">
            <div 
                className="addBookModel"
                onClose={() => this.props.getAllBooks()}
                trigger={
                    <button>
                    Add Book
                    </button>
                }
                >
                <AddBook />
            </div>
          <div className="row">
            <div className="col">
                <div className="card">
                    <img src={bookbuddyicon} alt="book-buddy-icon"/>
                    <div>
                        <h3>{username}</h3>
                        <span className="date">Joined in 2018</span>
                        <p>{about}</p>
                        <a>22 Friends</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div>
                    <SearchBar />
                </div>
                <div>
                    <BookShelf />
                </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
export default Connect;
