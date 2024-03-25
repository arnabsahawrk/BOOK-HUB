import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col justify-center items-center h-screen gap-4 text-center
     text-gray-900"
    >
      <h2 className="mb-8 font-extrabold text-9xl">
        <span className="sr-only">Error</span>404
      </h2>
      <p className="text-2xl font-semibold md:text-3xl">
        Sorry, we could not find this page.
      </p>
      <button
        onClick={() => navigate(-1)}
        rel="noopener noreferrer"
        className="px-8 py-3 font-semibold rounded bg-yellow-700 text-white"
      >
        Back
      </button>
    </section>
  );
};

export default ErrorPage;
