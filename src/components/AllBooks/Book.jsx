import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } =
    book || {};
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="p-6 border border-blue-300 rounded-2xl space-y-6 shadow-sm">
        <div className="p-6 bg-gray-100 rounded-2xl flex justify-center items-center">
          <img
            className="object-cover h-[200px] shadow-xl hover:shadow-inner rounded-lg"
            src={image}
            alt={bookName}
          />
        </div>
        <div className="space-y-2 border-b-2 border-dashed pb-4 border-gray-400">
          <ul className="flex items-center gap-3">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="px-2 py-1 text-yellow-700 bg-yellow-50 text-xs rounded-3xl text-nowrap"
              >
                {tag}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold text-blue-900 text-nowrap">
            {bookName}
          </h2>
          <p className="text-blue-300">By: {author}</p>
        </div>
        <ul className="flex justify-between items-center text-blue-300">
          <li>{category}</li>
          <li className="flex items-center gap-2">
            {rating} <CiStar />
          </li>
        </ul>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
