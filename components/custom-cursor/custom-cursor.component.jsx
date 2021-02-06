import React, { useEffect, useState } from "react";
import { useGlobalStateContext } from "../../context/global.context";
import { Cursor, CursorBackground } from "./custom-cursor.styles";

export default function CustomCursor() {
  const { cursorType } = useGlobalStateContext();

  const onMouseMove = (event) => {
    document.getElementById(
      "cursor"
    ).style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
    document.getElementById(
      "cursor-background"
    ).style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <Cursor id="cursor" className={`${!!cursorType ? cursorType : ""}`} />
      <CursorBackground
        id="cursor-background"
        className={`${!!cursorType ? cursorType : ""}`}
      />
    </>
  );
}
