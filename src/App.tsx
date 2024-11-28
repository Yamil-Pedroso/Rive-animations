import simpleAnimation from "./assets/animations/simple_ani.riv";
import simpleAnimation3 from "./assets/animations/yoshi_egg.riv";
import skullFire from "./assets/animations/skull_fire.riv";
import moonPlanet from "./assets/animations/moon_planet.riv";

import Banner from "./components/banner/Banner";
import MoonPlanet from "./components/moon_planet/MoonPlanet";
import SkullOnFire from "./components/skull-on-fire/SkullOnFire";
import LoquiEye from "./components/loqui-eye/LoquiEye";
import YoshiEgg from "./components/yoshi_egg/YoshiEgg";

const App = () => {
  return (
    <div className="main-container">
      <Banner />
      <div className="comp-wrapper">
        <LoquiEye animationFile={simpleAnimation} />
        <YoshiEgg animationFile3={simpleAnimation3} />
        <SkullOnFire animationFile4={skullFire} />
        <MoonPlanet animationFile5={moonPlanet} />
      </div>
    </div>
  );
};

export default App;
