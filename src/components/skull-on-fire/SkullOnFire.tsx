import { useRive } from "@rive-app/react-canvas";
import AniCardLayout from "../../common/ani-card-layout/AniCardLayout";

interface ISkullOnFireProps {
  animationFile4: string;
}

const SkullOnFire: React.FC<ISkullOnFireProps> = ({ animationFile4 }) => {
  const { RiveComponent } = useRive({
    src: animationFile4,
    autoplay: true,
  });

  return (
    <AniCardLayout style={{ backgroundColor: "#1a1205" }}>
      <h3>Skull on Fire</h3>
        <RiveComponent />
    </AniCardLayout>
  );
};

export default SkullOnFire;
