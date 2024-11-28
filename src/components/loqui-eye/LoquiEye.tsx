import { useRive } from "@rive-app/react-canvas";
import AniCardLayout from "../../common/ani-card-layout/AniCardLayout";

interface ILoquiEyeProps {
  animationFile: string;
}

const LoquiEye: React.FC<ILoquiEyeProps> = ({ animationFile }) => {
  const { RiveComponent } = useRive({
    src: animationFile,
    autoplay: true,
  });
  return (
    <AniCardLayout style={{ backgroundColor: "#292c35" }}>
      <h3>Loqui Eye</h3>
        <RiveComponent />
    </AniCardLayout>
  );
};

export default LoquiEye;
