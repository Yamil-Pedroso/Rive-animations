import { useEffect } from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import Banner from "./components/banner/Banner";
import LoquiEye from "./components/loqui-eye/LoquiEye";
import MoonPlanet from "./components/moon_planet/MoonPlanet";
import SkullOnFire from "./components/skull-on-fire/SkullOnFire";
import YoshiEgg from "./components/yoshi_egg/YoshiEgg";
import Metronome from "./components/metronome/Metronome";

import RiveFromSupabase from "./components/rive-from-supabase/RiveFromSupase";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const dynamicTheme = {
    ...theme,
    colors : {
      ...theme.colors,
      primary: isDarkMode ? theme.colors.secondary : theme.colors.primary,
    },
  }

  useEffect(() => {
    theme.text.primary = isDarkMode ? "black" : "supabase-text";

  }, [isDarkMode]);


  return (
    <ThemeProvider theme={dynamicTheme}>
      <GlobalStyles />
      <Banner activeSwitch={isDarkMode} setActiveSwitch={setIsDarkMode} />
      <div className="comp-wrapper">
        <LoquiEye />
        <MoonPlanet />
        <SkullOnFire />
        <YoshiEgg />
        <Metronome />

        <RiveFromSupabase isDarkMode={isDarkMode} />
      </div>
    </ThemeProvider>
  );
};

export default App;
