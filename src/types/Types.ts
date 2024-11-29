import simpleAnimation from "../assets/animations/simple_ani.riv";
import simpleAnimation3 from "../assets/animations/yoshi_egg.riv";
import skullFire from "../assets/animations/skull_fire.riv";
import moonPlanet from "../assets/animations/moon_planet.riv";
import metronome from "../assets/animations/metronome.riv";

interface IAniProps {
    animationFile: string;
}

const ani: IAniProps[] = [
    { animationFile: simpleAnimation },
    { animationFile: simpleAnimation3 },
    { animationFile: skullFire },
    { animationFile: moonPlanet },
    { animationFile: metronome },
]

export { ani }
