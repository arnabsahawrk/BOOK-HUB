import { useContext } from "react";
import { JSONdataContext } from "../../layouts/Root";

import { BounceLoader } from "react-spinners";
import Book from "./Book";

const AllBooks = () => {
  const [books, loading] = useContext(JSONdataContext);

  return (
    <section className="space-y-9">
      <h1 className="text-2xl md:text-4xl text-blue-900 font-bold text-center">
        Books
      </h1>
      <div className="flex flex-col items-center">
        <BounceLoader
          color="#FBC02D"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-stretch w-full">
          {books.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
