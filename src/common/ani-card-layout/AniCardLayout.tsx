import { AniCardLayoutContainer } from "./anicard_layout.styles"

interface IAniCardLayoutProps {
    style?: React.CSSProperties,
    children: React.ReactNode 
}

const AniCardLayout: React.FC<IAniCardLayoutProps> = ({ children, style }) => {
    return (
        <AniCardLayoutContainer style={style}>
            {children}
        </AniCardLayoutContainer>
    )
}

export default AniCardLayout