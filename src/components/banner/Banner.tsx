import { BannerContainer } from "./banner.styles";
import images from "../../assets";

const Banner = () => {
  return (
    <BannerContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <img src={images.logo} alt="logo" width="100" style={{ marginBottom: "1rem", opacity: 0.8 }} />
        <h2>Animation Examples</h2>
      </div>
    </BannerContainer>
  );
};

export default Banner;
