import Companies from "../../components/companies/Companies";
import Features from "../../components/features/Features";
import Hero from "../../components/hero/Hero";
import Slides from "../../components/slides/Slides";
import FiverrBusiness from "../../components/fiverr business/FiverrBusiness";
import "./Home.scss";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/footer/Footer";
import Snippet from "../../components/snippet/Snippet";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Companies />
      <Slides />
      <Features />
      <FiverrBusiness />
      <Projects />
      <Footer />
      <Snippet />
    </div>
  );
};

export default Home;
