import PropTypes from "prop-types";
import ListedBook from "./ListedBook";
import NotListed from "./NotListed";

const AllListedBooks = ({ saved, whichOne }) => {
  return (
    <div className="space-y-6 mt-6">
      {saved.length ? (
        saved.map((book) => (
          <ListedBook key={book.bookId} book={book} whichOne={whichOne} />
        ))
      ) : (
        <NotListed />
      )}
    </div>
  );
};

AllListedBooks.propTypes = {
  saved: PropTypes.array.isRequired,
  whichOne: PropTypes.bool.isRequired,
};

export default AllListedBooks;
