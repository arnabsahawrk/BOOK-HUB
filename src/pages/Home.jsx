import { Helmet } from "react-helmet-async";
import AllBooks from "../components/AllBooks/AllBooks";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <section className="space-y-10">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <AllBooks />
      <Footer />
    </section>
  );
};

export default Home;
