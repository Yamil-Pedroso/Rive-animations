import AniCardLayout from "../../common/ani-card-layout/AniCardLayout";
import { ani } from "../../types/Types";

const YoshiEgg = () => {

  return (
    <AniCardLayout style={{ backgroundColor: "#121413" }} title="Yoshi Egg" animationFile={ani[1].animationFile} />
  );
};

export default YoshiEgg;
