import NextHead from "next/head";
import React, { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useGlobalStateContext } from "../context/global.context";
import { useSetCursor } from "../hooks/use-set-cursor.hook";
import CustomCursor from "./custom-cursor/custom-cursor.component";
import Header from "./header/header.component";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: ${(props) => props.theme.primary};
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;

    }

    html {
        font-size: 62.5%;
        cursor: none;
    }

    body {
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Canarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        font-family: 'Ubuntu', sans-serif;
        background: ${(props) => props.theme.background};
        overscroll-behavior: none;
        overflow-x: hidden;
    }
`;

const Layout = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 50, height: 50 });
  const [theme, setTheme] = useState(undefined);

  useEffect(() => {
    setTheme(window.localStorage.getItem("theme") ?? "light");
  }, []);

  let darkTheme = {
    name: "dark",
    background: "#000",
    text: "#fff",
    hoverText: "#fff",
    cursor: "#ccc",
    primary: "#023e8a",
    secondary: "#E56399",
    cursorBackground: "#023e8a",
    top: `${position.y}px`,
    left: `${position.x}px`,
    width: `${size.width}px`,
    height: `${size.height}px`,
  };

  let lightTheme = {
    name: "light",
    background: "#fff",
    text: "#000",
    hoverText: "#fff",
    cursor: "#323232",
    primary: "#023e8a",
    secondary: "#E56399",
    cursorBackground: "#023e8a",
    top: `${position.y}px`,
    left: `${position.x}px`,
    width: `${size.width}px`,
    height: `${size.height}px`,
  };

  const state = useGlobalStateContext();
  const { cursorPosition, cursorType, cursorSize } = state;

  const onCursor = useSetCursor();

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (cursorType === "locked") {
      setPosition(cursorPosition);
    } else if (cursorType === "link") {
      setPosition(cursorPosition);
      setSize(cursorSize);
    }
  }, [cursorPosition, cursorType, cursorSize]);

  return (
    <>
      <NextHead>
        <title>tomshu.dev</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </NextHead>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <CustomCursor />
        <Header onCursor={onCursor} theme={theme} setTheme={setTheme} />

        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
