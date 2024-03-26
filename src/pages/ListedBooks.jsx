import { createContext, useEffect, useState } from "react";
import ListedBooksPage from "../components/ListedBooksPage/ListedBooksPage";
import { getStorage, removeStorage } from "../utils/localStorage";

export const ListedBooksContext = createContext([]);

const ListedBooks = () => {
  const [read, setRead] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleSorting = (str) => {
    switch (str) {
      case "rating":
        setRead(read.slice().sort((a, b) => b.rating - a.rating));
        setWishlist(wishlist.slice().sort((a, b) => b.rating - a.rating));
        break;
      case "pages":
        setRead(read.slice().sort((a, b) => b.totalPages - a.totalPages));
        setWishlist(
          wishlist.slice().sort((a, b) => b.totalPages - a.totalPages)
        );
        break;
      case "year":
        setRead(
          read.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        );
        setWishlist(
          wishlist
            .slice()
            .sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        );
        break;
    }
  };

  const handleRemove = (obj, bool) => {
    const remainData = removeStorage(obj, bool);
    bool ? setWishlist(remainData) : setRead(remainData);
  };

  useEffect(() => {
    const readBooks = getStorage();
    const wishlistBooks = getStorage(true);

    setRead(readBooks);
    setWishlist(wishlistBooks);
  }, []);

  return (
    <ListedBooksContext.Provider
      value={{ read, wishlist, handleSorting, handleRemove }}
    >
      <section className="space-y-10 md:space-y-20">
        <ListedBooksPage />
      </section>
    </ListedBooksContext.Provider>
  );
};

export default ListedBooks;
