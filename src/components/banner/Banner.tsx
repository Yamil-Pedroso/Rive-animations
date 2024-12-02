import { useState } from "react";
import { BannerContainer, BannerWrapper } from "./banner.styles";
import Switch from "../switch/Switch";
import images from "../../assets";

interface IBannerProps {
  activeSwitch?: boolean;
  setActiveSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner: React.FC<IBannerProps> = ({ activeSwitch, setActiveSwitch }) => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  const handleMouseEnter2 = () => {
    setActive2(true);
  };

  const handleMouseLeave2 = () => {
    setActive2(false);
  };

  return (
    <BannerContainer>
      <BannerWrapper>
        <img
          className={`
            ${active ? "ship" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={images.ufo}
          alt="logo"
          width="200"
          style={{
            opacity: 0.8,
            transition: "transform 0.3s ease",
            transform: `${active ? "scale(0.6)" : "scale(1)"} ${
              active2 ? "rotate(360deg)" : "rotate(0deg)"
            }`,
          }}
        />
        <h2
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          style={{
            transition: "transform 0.3s ease",
            transform: active ? "scale(1.2)" : "scale(1)",
          }}
        >
          Animation Examples
        </h2>

        <Switch activeSwitch={activeSwitch} setActiveSwitch={setActiveSwitch} />
      </BannerWrapper>
    </BannerContainer>
  );
};

export default Banner;
