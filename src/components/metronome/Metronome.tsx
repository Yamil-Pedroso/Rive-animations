import AniCardLayout from "../../common/ani-card-layout/AniCardLayout";
import { ani } from "../../types/Types";

const Metronome = () => {
  return (
    <AniCardLayout style={{ backgroundColor: "#070B15" }} title="Metronome" animationFile={ani[4].animationFile} />
  )
}

export default Metronome