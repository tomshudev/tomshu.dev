import { motion } from "framer-motion";
import styled from "styled-components";

export const NavBar = styled(motion.nav)`
  display: flex;
  font-size: 2rem;
`;

export const NavItem = styled(motion.div)`
  margin-right: 2rem;

  &:hover {
    color: ${(props) => props.theme.hoverText};
  }
`;
