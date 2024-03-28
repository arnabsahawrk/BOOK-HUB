import { useContext } from "react";
import { JSONdataContext } from "../layouts/Root";
import { BounceLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { setStorage } from "../utils/localStorage";
import { Helmet } from "react-helmet-async";

const BookDetails = () => {
  const { bookId } = useParams();
  const [books, loading] = useContext(JSONdataContext);
  const thisBook = books.find((book) => book.bookId === +bookId);
  const {
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = thisBook || {};

  const handleBook = () => {
    setStorage(thisBook);
  };
  const handleWishList = () => {
    setStorage(thisBook, true);
  };

  return (
    <section className="flex flex-col items-center">
      <Helmet>
        <title>Book Details</title>
      </Helmet>
      <BounceLoader
        color="#FBC02D"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full">
        <div className="p-6 bg-gray-100 rounded-2xl flex justify-center items-center">
          <img
            className="object-cover max-h-[400px] md:max-h-[564px] rounded-lg"
            src={image}
            alt={bookName}
          />
        </div>
        <div className="flex-1 space-y-6">
          <article className="space-y-3 border-b border-gray-300 pb-4">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
              {bookName}
            </h2>
            <p className="text-blue-300 text-lg">By: {author}</p>
            <p className="text-blue-300 text-lg font-semibold border-y border-gray-300 py-4">
              {category}
            </p>
            <p className="text-blue-200 text-lg text-justify">
              <span className="font-bold text-blue-300">Review:</span> {review}
            </p>
            <div className="flex gap-4 items-center">
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
            </div>
          </article>
          <ul className="grid grid-cols-2 sm:3/4 md:w-2/4 text-blue-300 md:text-lg gap-y-2">
            <li>Number of Pages:</li>
            <li className="font-bold">{totalPages}</li>
            <li>Publisher:</li>
            <li className="font-bold">{publisher}</li>
            <li>Year of Publishing:</li>
            <li className="font-bold">{yearOfPublishing}</li>
            <li>Rating:</li>
            <li className="font-bold">{rating}</li>
          </ul>
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={handleBook}
              rel="noopener noreferrer"
              className="px-4 py-2 md:px-6 md:py-3 font-semibold text-sm md:text-base rounded-lg bg-yellow-700 text-white"
            >
              Read
            </button>
            <button
              onClick={handleWishList}
              rel="noopener noreferrer"
              className="px-4 py-2 md:px-6 md:py-3 font-semibold text-sm md:text-base rounded-lg bg-blue-900 text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
