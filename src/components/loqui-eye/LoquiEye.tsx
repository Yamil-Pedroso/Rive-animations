import AniCardLayout from "../../common/ani-card-layout/AniCardLayout";
import { ani } from "../../types/Types";
import { motion } from "framer-motion";

const LoquiEye  = () => {
  return (
    <AniCardLayout
      style={{ backgroundColor: "#292c35" }}
      animationFile={ani[0].animationFile}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 6, type: "spring", stiffness: 120 }}
      >
        <h3>Loqui Eye</h3>
      </motion.div>
    </AniCardLayout>
  );
};

export default LoquiEye;
