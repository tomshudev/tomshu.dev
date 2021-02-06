import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeSection = styled.div`
  height: calc(100vh - 8rem);
  position: relative;
`;

export const HeroSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 8rem;
  align-items: center;
  height: 100%;
`;

export const HeroHeadline = styled(motion.div)`
  font-size: 10rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  color: ${(props) => props.theme.primary};
`;

export const HeroParagraph = styled(motion.p)`
  font-size: 3.2rem;
  font-weight: 100;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.secondary};
  display: flex;

  span {
    display: block;
  }
`;

export const ScrollIcon = styled(motion.div)`
  &,
  &::before {
    left: 50%;
  }

  & {
    width: 28px;
    height: 50px;
    margin-left: -20px;
    margin-top: -35px;
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.primary};
    border-radius: 25px;
    position: relative;
  }

  &::before {
    content: "";
    width: 5px;
    height: 5px;
    background: ${(props) => props.theme.primary};
    margin-left: -2.5px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
    position: absolute;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(28px);
    }
  }
`;
