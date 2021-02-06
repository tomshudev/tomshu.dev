import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  /* width: auto; */
  height: 100%;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    max-width: 96rem;
  }
  @media (min-width: 1216px) {
    max-width: 115rem;
  }
  @media (min-width: 1408px) {
    max-width: 140rem;
  }
`;

export const Flex = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 100%;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}
    ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}
    ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;
