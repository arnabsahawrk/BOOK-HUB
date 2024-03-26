import AllBooks from "../components/AllBooks/AllBooks";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <section className="space-y-10 md:space-y-20">
      <Banner />
      <AllBooks />
    </section>
  );
};

export default Home;
