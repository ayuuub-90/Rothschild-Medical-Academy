import Hero from "../components/Hero";
import HeroVideo from "../components/HeroVideo";
import Partners from "../components/Partners";
import Formations from "../components/Formations";
import EventComing from "../components/EventComing";

const HomePage = () => {
  return (
    <div id="container">
      <Hero />
      <Formations />
      <HeroVideo />
      <EventComing />
      <Partners />
    </div>
  );
};

export default HomePage;
