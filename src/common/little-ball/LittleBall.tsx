import { LittleBallElem } from "./little_ball.styles"

interface ILittleBallProps {
   activeGreenBall?: boolean
}

const LittleBall: React.FC<ILittleBallProps> = ({ activeGreenBall }) => {

  return (
    <LittleBallElem className={activeGreenBall ? "active" : ""} />
  )
}

export default LittleBall
