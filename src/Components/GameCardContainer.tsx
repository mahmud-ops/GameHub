import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const MotionBox = motion.create(Box);

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <MotionBox
      borderRadius={10}
      overflow="hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </MotionBox>
  );
};

export default GameCardContainer;
