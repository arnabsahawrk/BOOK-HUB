import { Link } from "react-router-dom";

const NotListed = () => {
  return (
    <section
      className="flex flex-col justify-center items-center gap-4 text-center
 text-blue-900"
    >
      <img
        className="object-cover size-52"
        src="https://i.postimg.cc/nr17k6gC/books.png"
        alt="Books"
      />
      <p className="text-2xl font-semibold md:text-3xl">
        You did not add any book yet
      </p>
      <Link to="/">
        <button
          rel="noopener noreferrer"
          className="px-8 py-3 font-semibold rounded bg-yellow-700 text-white"
        >
          Goto Add
        </button>
      </Link>
    </section>
  );
};

export default NotListed;
