import { useState } from "react";
import { useRive } from "@rive-app/react-canvas";
import { AniCardLayoutContainer, TitleWrapper } from "./anicard_layout.styles"
import LittleBall from "../little-ball/LittleBall"

interface IAniCardLayoutProps {
    title?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    animationFile?: string
}

const AniCardLayout: React.FC<IAniCardLayoutProps> = ({ title, style, animationFile }) => {
    const [activeGreenBall, setActiveGreenBall] = useState(false);

    const handleMouseEnter = () => {
        setActiveGreenBall(true);
    }

    const handleMouseLeave = () => {
        setActiveGreenBall(false);
    }

    const { RiveComponent } = useRive({
        src: animationFile,
        autoplay: true,
    });

    return (
        <AniCardLayoutContainer
          style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <TitleWrapper>
                <h3>{title}</h3>
                <LittleBall activeGreenBall={activeGreenBall} />
            </TitleWrapper>

            <RiveComponent />
        </AniCardLayoutContainer>
    )
}

export default AniCardLayout
