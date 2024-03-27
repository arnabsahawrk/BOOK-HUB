const NoBooks = () => {
  return (
    <section className="md:col-span-2 lg:col-span-3">
      <div
        className="flex flex-col justify-center items-center gap-4 text-center
text-blue-900"
      >
        <img
          className="object-cover size-52"
          src="https://i.postimg.cc/nr17k6gC/books.png"
          alt="Books"
        />
        <p className="text-2xl font-semibold md:text-3xl">
          No book is available on this category
        </p>
      </div>
    </section>
  );
};

export default NoBooks;
