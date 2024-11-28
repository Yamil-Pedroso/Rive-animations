import { useRive } from "@rive-app/react-canvas";
import AniCardLayout from "../../common/ani-card-layout/AniCardLayout";

interface IMoonPlanetProps {
  animationFile5: string;
}

const MoonPlanet: React.FC<IMoonPlanetProps> = ({ animationFile5 }) => {
  const { RiveComponent } = useRive({
    src: animationFile5,
    autoplay: true,
  });

  return (
    <AniCardLayout style={{ backgroundColor: "#0d0d0d" }}>
      <h3>Moon Planet</h3>
        <RiveComponent />
    </AniCardLayout>
  );
};

export default MoonPlanet;
