import { BounceLoader } from "react-spinners";
import Book from "../components/AllBooks/Book";
import { useContext, useEffect, useState } from "react";
import { JSONdataContext } from "../layouts/Root";
import { Input, Button } from "@material-tailwind/react";
import NoBooks from "../components/NoBooks/NoBooks";
import { Helmet } from "react-helmet-async";

const SearchBooks = () => {
  const [allBooks, loading] = useContext(JSONdataContext);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const onChange = ({ target }) => setSearch(target.value);

  useEffect(() => {
    setBooks(allBooks);
  }, [allBooks]);
  const handleSearch = () => {
    const found = allBooks.filter((book) =>
      book.category.toLowerCase().includes(search.trim().toLocaleLowerCase())
    );
    setBooks(found);
    setSearch("");
  };

  return (
    <section className="space-y-9">
      <Helmet>
        <title>Search Books</title>
      </Helmet>
      <div className="text-center py-6 rounded-lg bg-gray-100 shadow-sm space-y-4">
        <h1 className="text-2xl md:text-3xl text-blue-900 font-bold">
          Search Books
        </h1>
        {/* Search */}
        <div className="relative flex w-full max-w-[20rem] md:max-w-[24rem] mx-auto">
          <Input
            type="text"
            label="Category"
            value={search}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            onClick={handleSearch}
            size="sm"
            disabled={!search}
            className={`!absolute right-1 top-1 rounded ${
              search ? "bg-blue-900" : "bg-blue-200"
            }`}
          >
            Search
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <BounceLoader
          color="#FBC02D"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-stretch w-full">
          {books.length ? (
            books.map((book) => <Book key={book.bookId} book={book} />)
          ) : (
            <NoBooks />
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchBooks;
