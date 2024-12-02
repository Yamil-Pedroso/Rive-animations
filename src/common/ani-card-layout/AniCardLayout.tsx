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

const AniCardLayout: React.FC<IAniCardLayoutProps> = ({ children, title, style, animationFile }) => {
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
            <TitleWrapper
              initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 4.5, type: "spring", stiffness  : 120 }}
            >
                <h3>{title}</h3>
                {children}
                <LittleBall activeGreenBall={activeGreenBall} />
            </TitleWrapper>

            <RiveComponent />
        </AniCardLayoutContainer>
    )
}

export default AniCardLayout
