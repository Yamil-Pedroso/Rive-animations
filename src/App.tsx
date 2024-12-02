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
import Typing from "./components/typing/Typing";
import LetterWave from "./components/letter-wave/LetterWave";

import RiveFromSupabase from "./components/rive-from-supabase/RiveFromSupase";
import { motion } from "framer-motion";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const components = [
    { id: 1, component: <LoquiEye /> },
    { id: 2, component: <MoonPlanet /> },
    { id: 3, component: <SkullOnFire /> },
    { id: 4, component: <YoshiEgg /> },
    { id: 5, component: <Metronome /> },
    { id: 6, component: <Typing /> },
    { id: 7, component: <LetterWave /> },
  ];

  const dynamicTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: isDarkMode ? theme.colors.secondary : theme.colors.primary,
    },
  };

  useEffect(() => {
    theme.text.primary = isDarkMode ? "black" : "supabase-text";
  }, [isDarkMode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  return (
    <ThemeProvider theme={dynamicTheme}>
      <GlobalStyles />
      <Banner activeSwitch={isDarkMode} setActiveSwitch={setIsDarkMode} />
      <div className="comp-wrapper">
        <h1 style={{ color: isDarkMode ? "#435a53" : "black" }}>
          Animation Gallery from Local
        </h1>
        <motion.div
          className="local-ani-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {components.map(({ id, component }) => {
            //const Component = eval(component.Component);
            return (
              <motion.div key={id} variants={itemVariants}>
                {component}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <RiveFromSupabase isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
};

export default App;
