import { useRef } from "react";
import {
  SET_CURSOR_TYPE,
  useGlobalDispatchContext,
} from "../context/global.context";

const cursorStyles = ["pointer", "hovered", "locked", "link"];

export const useSetCursor = () => {
  const dispatch = useGlobalDispatchContext();
  const setCursorRef = useRef();

  setCursorRef.current = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: SET_CURSOR_TYPE, payload: { cursorType } });
  };

  return setCursorRef.current;
};
