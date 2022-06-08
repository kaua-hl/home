import LayoutDefault from "../../layouts/LayoutDefault";
import Apartments from "../../components/Home/Apartments/Apartments";
import Banner from "../../components/Home/Banner/Banner";
import Faq from "../../components/Home/Faq/Faq";
import Features from "../../components/Home/Features/Features";
import Newsletter from "../../components/Home/Newsletter/Newsletter";

const Home = () => {
  return (
    <LayoutDefault>
      <main>
        <Banner />
        <Features />
        <Apartments />
        <Faq />
        <Newsletter />
      </main>
    </LayoutDefault>
  );
};

export default Home;
