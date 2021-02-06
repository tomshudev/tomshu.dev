import Link from "next/link";
import React, { useRef } from "react";
import {
  SET_CURSOR_POSITION,
  useGlobalDispatchContext,
} from "../../context/global.context";
import { useElementPosition } from "../../hooks/use-element-position.hook";
import { Container, Flex } from "../global.component";
import Nav from "../nav/nav.component";
import { HeaderSection, Logo, ThemeSwitcher } from "./header.styles";

export default function Header({ onCursor, setTheme, theme }) {
  const dispatch = useGlobalDispatchContext();

  const switcher = useRef(null);
  const switcherPosition = useElementPosition(switcher);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const switcherHover = () => {
    onCursor("locked");
    dispatch({
      type: SET_CURSOR_POSITION,
      payload: {
        position: {
          ...switcherPosition,
          y: switcherPosition.y + (switcherPosition.isResized ? 0 : 200),
        },
      },
    });
  };

  return (
    <HeaderSection>
      <Container>
        <Flex
          spaceBetween
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <Link href="/">
            <Logo
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            >
              tomshu.dev
            </Logo>
          </Link>
          {/* <Link to="#"></Link> */}
          <Nav />
          <ThemeSwitcher
            ref={switcher}
            onClick={toggleTheme}
            onMouseEnter={switcherHover}
            onMouseLeave={onCursor}
          />
        </Flex>
      </Container>
    </HeaderSection>
  );
}
