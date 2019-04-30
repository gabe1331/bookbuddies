import React from "react";
import { connect } from "react-redux";
import {
  addNewBook,
  getAllBooks,
  googleBook,
  clearGoogle
} from "../Redux/Actions/ActBooks";
import GoogleShelf from "./GoogleShelf";

const initialState = {
  search: "",
  title: "",
  author: "",
  isbn10: "",
  isbn13: "",
  image: "",
  rating: 4,
  id: null
};
class AddBook extends React.Component {
  state = { ...initialState };

  componentWillMount() {
    this.props.clearGoogle();
  }

  updateBookState = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddBook = (e) => {
    e.preventDefault()
    const bookData = { ...this.state };
    this.props.addNewBook(bookData, this.props.userInfo.id);
  };

  render() {
    return (
      <React.Fragment>
        <GoogleShelf data={this.props.googleBook} />

        <form>
          <p
            className="profileHeader"
          >
            <b>Add a new book to your shelf</b>
          </p>

          <input
            className="bookTitle"
            placeholder="Title"
            type="text"
            name="title"
            onChange={this.updateBookState}
          />
          <input
            className="bookAuthor"
            placeholder="Author"
            type="text"
            name="author"
            onChange={this.updateBookState}
          />
          <input
            className=""
            placeholder="*optional isbn10*"
            type="text"
            name="isbn10"
            onChange={this.updateBookState}
          />
          <input
            className=""
            placeholder="*optional isbn13*"
            type="text"
            name="isbn13"
            onChange={this.updateBookState}
          />

          <button
            className="addBook"
            onClick={this.handleAddBook}
          >
            Add Book
          </button>
        </form>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { userInfo: state.userInfo, googleBook: state.googleBookAPI };
};

function mapDispatchToProps(dispatch) {
  return {
    addNewBook: (bookData, id) => {
      dispatch(addNewBook(bookData, id));
    },
    getAllBooks: book => {
      dispatch(getAllBooks(book));
    },
    googleBook: bookData => {
      dispatch(googleBook(bookData));
    },
    clearGoogle: bookData => {
      dispatch(clearGoogle());
    }
  };
}
const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook);
export default Connect;
