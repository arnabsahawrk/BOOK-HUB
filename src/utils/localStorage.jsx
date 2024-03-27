import toast from "react-hot-toast";

const getStorage = (wishList) => {
  if (wishList) {
    return JSON.parse(window.localStorage.getItem("wishList")) || [];
  } else {
    return JSON.parse(window.localStorage.getItem("read")) || [];
  }
};

const saveStorage = (obj, wishList) => {
  const storedData = getStorage(wishList);

  const isExist = storedData.find((book) => book.bookId === obj.bookId);
  if (isExist) return toast.error("You've already added this book.");

  storedData.push(obj);

  if (wishList) {
    const bookData = getStorage(false);

    const existTheBook = bookData.find((book) => book.bookId === obj.bookId);
    if (existTheBook)
      return toast.error("You've already read this book.", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });

    window.localStorage.setItem("wishList", JSON.stringify(storedData));
    toast.success("The book added to wishlist.");
  } else {
    window.localStorage.setItem("read", JSON.stringify(storedData));
    toast.success("The book added to read list.");
  }
};

const removeStorage = (obj, wishList = false) => {
  const storedData = getStorage(wishList);

  const remainData = storedData.filter((book) => book.bookId !== obj.bookId);

  if (wishList) {
    window.localStorage.setItem("wishList", JSON.stringify(remainData));
  } else {
    window.localStorage.setItem("read", JSON.stringify(remainData));
  }
  toast.success("The book successfully removed from your list.", {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
  return remainData;
};

const setStorage = (obj, wishList = false) => {
  saveStorage(obj, wishList);
};

//Form Submission
const getUserDataStorage = () => {
  return JSON.parse(window.localStorage.getItem("userData")) || {};
};
const setUserDataStorage = (data) => {
  window.localStorage.setItem("userData", JSON.stringify(data));
  toast.success("Your Submission Done Successfully.");
};

export {
  setStorage,
  getStorage,
  removeStorage,
  getUserDataStorage,
  setUserDataStorage,
};
