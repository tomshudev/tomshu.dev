import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const HeaderSection = styled(motion.div)`
  height: 8rem;
  width: 100%;
  grid-row: 1 / 2;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
  z-index: 0;
`;

export const Logo = styled.a`
  font-size: 3.5rem;
  font-weight: 700;
  z-index: 2;
`;

export const ThemeSwitcher = styled.div`
  background: ${(props) => props.theme.background};
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  transition: all 0.2s;

  &:hover {
    ${(props) =>
      props.theme.name === "dark" &&
      css`
        filter: invert(0.25);
      `};

    ${(props) =>
      props.theme.name === "light" &&
      css`
        filter: brightness(75%);
      `}
  }
`;
