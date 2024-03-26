import PropTypes from "prop-types";
import ListedBook from "./ListedBook";
import NotListed from "./NotListed";

const AllListedBooks = ({ saved }) => {
  return (
    <div className="space-y-6 mt-6">
      {saved.length ? (
        saved.map((book) => <ListedBook key={book.bookId} book={book} />)
      ) : (
        <NotListed />
      )}
    </div>
  );
};

AllListedBooks.propTypes = {
  saved: PropTypes.array.isRequired,
};

export default AllListedBooks;
