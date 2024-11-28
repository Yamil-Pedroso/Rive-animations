import { useRive } from "@rive-app/react-canvas";
import AniCardLayout from "../../common/ani-card-layout/AniCardLayout";

interface IJumpBallProps {
  animationFile3: string;
}

const YoshiEgg: React.FC<IJumpBallProps> = ({ animationFile3 }) => {
  const { RiveComponent } = useRive({
    src: animationFile3,
    autoplay: true,
  });
  return (
    <AniCardLayout style={{ backgroundColor: "#121413" }}>
      <h3>Jump Yoshi Egg</h3>

      <RiveComponent />
    </AniCardLayout>
  );
};

export default YoshiEgg;
