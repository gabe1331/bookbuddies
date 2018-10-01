import React from "react";
import { connect } from "react-redux";
import Book from "./Book.jsx";
import { Grid } from "semantic-ui-react";

class BookShelf extends React.Component {
  state = { booksToDisplay: [] };
  componentDidMount() {
    if (this.props.allBooks) {
      this.setState({ booksToDisplay: this.props.allBooks });
    }
  }

  defaultBooks() {
    return this.state.booksToDisplay.map(book => {
      return (
        <Book
          title={book.title}
          author={book.author}
          bookId={book.id}
          ownerId={book.userId}
          image={book.image}
          rating={book.rating}
          key={book.id}
          google={"false"}
        />
      );
    });
  }

  render() {
    return <React.Fragment>{this.defaultBooks()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return { allBooks: state.books };
};

function mapDispatchToProps(dispatch) {
  return {};
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShelf);
export default Connect;
