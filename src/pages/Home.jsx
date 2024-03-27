import AllBooks from "../components/AllBooks/AllBooks";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <section className="space-y-10">
      <Banner />
      <AllBooks />
      <Footer />
    </section>
  );
};

export default Home;
