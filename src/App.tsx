import Banner from "./components/banner/Banner";
import LoquiEye from "./components/loqui-eye/LoquiEye";
import MoonPlanet from "./components/moon_planet/MoonPlanet";
import SkullOnFire from "./components/skull-on-fire/SkullOnFire";
import YoshiEgg from "./components/yoshi_egg/YoshiEgg";

const App = () => {
  return (
    <div className="main-container">
      <Banner />
      <div className="comp-wrapper">
        <LoquiEye />
        <MoonPlanet />
        <SkullOnFire />
        <YoshiEgg />
      </div>
    </div>
  );
};

export default App;
