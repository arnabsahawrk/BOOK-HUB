import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import { LuFileBarChart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { ListedBooksContext } from "../../pages/ListedBooks";

const ListedBook = ({ book, whichOne }) => {
  const { handleRemove } = useContext(ListedBooksContext);
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book || {};
  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 border border-blue-300 rounded-2xl space-y-6 shadow-sm relative">
      <div className="p-6 bg-gray-100 rounded-2xl flex justify-center items-center">
        <img
          className="object-cover max-h-[200px] shadow-xl hover:shadow-inner rounded-lg"
          src={image}
          alt={bookName}
        />
      </div>
      <div className="flex-1">
        <div className="space-y-2 md:space-y-4 border-b-2 border-gray-300 pb-4">
          <h2 className="text-2xl font-bold text-blue-900 text-nowrap">
            {bookName}
          </h2>
          <p className="text-blue-300">By: {author}</p>
          <div className="flex gap-2 lg:gap-4 items-center flex-wrap">
            <span className="font-bold text-blue-300">Tag</span>
            <ul className="flex items-center gap-3">
              {tags?.map((tag, idx) => (
                <li
                  key={idx}
                  className="px-2 py-1 text-yellow-700 bg-yellow-50 text-xs rounded-3xl text-nowrap"
                >
                  #{tag}
                </li>
              ))}
            </ul>
            <span className="text-blue-300 flex gap-1 items-center">
              <SlLocationPin />
              Year of Publishing: {yearOfPublishing}
            </span>
          </div>
          <ul className="flex items-center gap-3 flex-wrap text-blue-200">
            <li className="flex gap-2 items-center">
              <BsPeople /> Publisher: {publisher}
            </li>
            <li className="flex gap-2 items-center">
              <LuFileBarChart /> Page {totalPages}
            </li>
          </ul>
        </div>
        <ul className="flex gap-2 md:gap-4 items-center justify-center md:justify-start flex-wrap mt-4">
          <li className="px-2 md:px-3 md:py-2 py-1 text-blue-700 bg-blue-50 rounded-3xl">
            Category: {category}
          </li>
          <li className="px-2 md:px-3 md:py-2 py-1 text-yellow-700 bg-yellow-50 rounded-3xl">
            Rating: {rating}
          </li>
          <li className="px-2 md:px-3 md:py-2 py-1 text-white bg-yellow-700 rounded-3xl font-semibold">
            <Link to={`/bookDetails/${bookId}`}>View Details</Link>
          </li>
        </ul>
      </div>
      <button
        onClick={() => handleRemove(book, whichOne)}
        className="absolute top-0 right-0 translate-x-3 md:translate-x-5 -translate-y-10 bg-red-200 text-red-900 p-3 rounded-full text-3xl"
      >
        <MdOutlineDeleteForever />
      </button>
    </div>
  );
};

ListedBook.propTypes = {
  book: PropTypes.object.isRequired,
  whichOne: PropTypes.bool.isRequired,
};

export default ListedBook;
