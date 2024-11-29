import AniCardLayout from "../../common/ani-card-layout/AniCardLayout";
import { ani } from "../../types/Types";

const MoonPlanet = () => {
  return (
    <AniCardLayout style={{ backgroundColor: "#0d0d0d" }} title="Moon Planet" animationFile={ani[3].animationFile} />
  );
};

export default MoonPlanet;
