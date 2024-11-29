import AniCardLayout from "../../common/ani-card-layout/AniCardLayout";
import { ani } from "../../types/Types";

const LoquiEye = () => {

  return (
    <AniCardLayout style={{ backgroundColor: "#292c35" }} title="Loqui Eye" animationFile={ani[0].animationFile} />
  );
};

export default LoquiEye;
