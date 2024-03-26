import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-gray-100 text-blue-900 rounded-lg shadow-sm">
      <div className="container flex flex-col-reverse justify-center p-6 lg:p-24 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center gap-5 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-bold leading-none md:leading-normal md:text-5xl">
            Discover Your Next Literary Adventure
          </h1>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to="/listedBooks">
              <button className="px-4 py-2 md:px-6 md:py-3 font-semibold text-sm md:text-base rounded-lg bg-yellow-700 text-white">
                View The List
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://i.postimg.cc/TYjSpQjz/The-Alchemist.jpg"
            alt="The-Alchemist"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 shadow-xl hover:shadow-inner rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
