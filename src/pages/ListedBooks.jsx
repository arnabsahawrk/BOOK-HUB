import { createContext, useEffect, useState } from "react";
import ListedBooksPage from "../components/ListedBooksPage/ListedBooksPage";
import { getStorage } from "../utils/localStorage";

export const ListedBooksContext = createContext([]);

const ListedBooks = () => {
  const [read, setRead] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const readBooks = getStorage();
    const wishlistBooks = getStorage(true);

    setRead(readBooks);
    setWishlist(wishlistBooks);
  }, []);

  return (
    <ListedBooksContext.Provider value={[read, wishlist]}>
      <section className="space-y-10 md:space-y-20">
        <ListedBooksPage />
      </section>
    </ListedBooksContext.Provider>
  );
};

export default ListedBooks;
