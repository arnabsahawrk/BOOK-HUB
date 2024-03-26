import PropTypes from "prop-types";
import ListedBook from "./ListedBook";

const AllListedBooks = ({ saved }) => {
  return (
    <div className="space-y-6 mt-6">
      {saved.map((book) => (
        <ListedBook key={book.bookId} book={book} />
      ))}
    </div>
  );
};

AllListedBooks.propTypes = {
  saved: PropTypes.array.isRequired,
};

export default AllListedBooks;
