import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import ErrorPage from "../pages/ErrorPage";
import BookDetails from "../pages/BookDetails";
import JoinWithHub from "../pages/JoinWithHub";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead />,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails />,
      },
      {
        path: "/joinHub",
        element: <JoinWithHub />,
      },
    ],
  },
]);

export default router;
