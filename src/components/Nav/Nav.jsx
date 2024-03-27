import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-bold hover:text-yellow-700 text-blue-900"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `${
              isActive
                ? "text-yellow-700 bg-gray-100 border border-yellow-700 px-2 md:px-3 py-1 md:py-2 rounded-lg hover:text-white hover:bg-yellow-700"
                : ""
            } ${isPending ? "text-red-700" : ""}`
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-bold hover:text-yellow-700 text-blue-900"
      >
        <NavLink
          to="/listedBooks"
          className={({ isActive, isPending }) =>
            `${
              isActive
                ? "text-yellow-700 bg-gray-100 border border-yellow-700 px-2 md:px-3 py-1 md:py-2 rounded-lg hover:text-white hover:bg-yellow-700"
                : ""
            } ${isPending ? "text-red-700" : ""}`
          }
        >
          Listed Books
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-bold hover:text-yellow-700 text-blue-900"
      >
        <NavLink
          to="/pagesToRead"
          className={({ isActive, isPending }) =>
            `${
              isActive
                ? "text-yellow-700 bg-gray-100 border border-yellow-700 px-2 md:px-3 py-1 md:py-2 rounded-lg hover:text-white hover:bg-yellow-700"
                : ""
            } ${isPending ? "text-red-700" : ""}`
          }
        >
          Pages to Read
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-bold hover:text-yellow-700 text-blue-900"
      >
        <NavLink
          to="/searchBooks"
          className={({ isActive, isPending }) =>
            `${
              isActive
                ? "text-yellow-700 bg-gray-100 border border-yellow-700 px-2 md:px-3 py-1 md:py-2 rounded-lg hover:text-white hover:bg-yellow-700"
                : ""
            } ${isPending ? "text-red-700" : ""}`
          }
        >
          Search Books
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-bold hover:text-yellow-700 text-blue-900"
      >
        <NavLink
          to="/joinHub"
          className={({ isActive, isPending }) =>
            `${
              isActive
                ? "text-yellow-700 bg-gray-100 border border-yellow-700 px-2 md:px-3 py-1 md:py-2 rounded-lg hover:text-white hover:bg-yellow-700"
                : ""
            } ${isPending ? "text-red-700" : ""}`
          }
        >
          Join Hub
        </NavLink>
      </Typography>
      <div className="lg:hidden flex items-center gap-4 flex-wrap">
        <button
          rel="noopener noreferrer"
          className="px-4 py-2 md:px-6 md:py-3 font-semibold text-sm md:text-base rounded-lg bg-yellow-700 text-white"
        >
          Sign In
        </button>
        <button
          rel="noopener noreferrer"
          className="px-4 py-2 md:px-6 md:py-3 font-semibold text-sm md:text-base rounded-lg bg-blue-900 text-white"
        >
          Sign Up
        </button>
      </div>
    </ul>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="shadow-none mx-auto bg-gray-200 border-none">
      <div className="flex items-center justify-between">
        <Link to="/">
          <Typography
            as="h1"
            className="mr-4 cursor-pointer py-1.5 text-blue-900 text-xl md:text-3xl font-extrabold"
          >
            BOOK HUB
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto size-7 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="size-7 text-blue-900" strokeWidth={2} />
          ) : (
            <Bars3Icon
              className="size-7 bg-yellow-700 rounded"
              strokeWidth={2}
            />
          )}
        </IconButton>
        <div className="hidden lg:flex items-center gap-4 flex-wrap">
          <button
            rel="noopener noreferrer"
            className="lg:px-6 lg:py-3 font-semibold lg:text-base rounded-lg bg-yellow-700 text-white"
          >
            Sign In
          </button>
          <button
            rel="noopener noreferrer"
            className="lg:px-6 lg:py-3 font-semibold lg:text-base rounded-lg bg-blue-900 text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nav;
