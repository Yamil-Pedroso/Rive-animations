import AniCardLayout from "../../common/ani-card-layout/AniCardLayout";
import { ani } from "../../types/Types";
import { motion } from "framer-motion";

const Typing = () => {
  return (
    <AniCardLayout style={{ backgroundColor: "#051509" }} animationFile={ani[5].animationFile}>
       <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 6, type: "spring", stiffness: 120 }}
      >
        <h3>Typing</h3>
      </motion.div>
    </AniCardLayout>
  )
}

export default Typing