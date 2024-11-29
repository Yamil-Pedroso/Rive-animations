import AniCardLayout from "../../common/ani-card-layout/AniCardLayout";
import { ani } from "../../types/Types";

const SkullOnFire = () => {

  return (
    <AniCardLayout style={{ backgroundColor: "#1a1205" }} title="Skull On Fire" animationFile={ani[2].animationFile} />
  );
};

export default SkullOnFire;
