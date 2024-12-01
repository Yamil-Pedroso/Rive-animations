import styled from "styled-components";
import { motion } from "framer-motion";

interface SwitchProps {
    active?: boolean;
}

export const SwitchContainer = styled.div``;

export const SwitchWrapper = styled.div`
  width: 5rem;
  border: 5px solid #000;
  border-radius: 3rem;
  display: flex;
  overflow: hidden;
`;

export const SwitchButton = styled(motion.div)<SwitchProps>`
  width: 2rem;
  height: 2rem;
  background-color: #000;
  border-radius: 50%;
  cursor: pointer;
  margin-left: ${(props) => (props.active ? "auto" : "0")};
`;
