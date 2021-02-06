import { useEffect, useRef } from "react";
import {
  SET_CURSOR_POSITION,
  SET_CURSOR_SIZE,
  useGlobalDispatchContext,
} from "../context/global.context";
import { useSetCursor } from "./use-set-cursor.hook";

export const useLinkHover = (smaller) => {
  const dispatch = useGlobalDispatchContext();
  const onCursor = useSetCursor();

  const linkHover = (e, cursorType) => {
    onCursor(cursorType);
    if (cursorType) {
      let boundingRect = e.target.getBoundingClientRect();

      dispatch({
        type: SET_CURSOR_POSITION,
        payload: {
          position: {
            x: boundingRect.x,
            y: boundingRect.y,
          },
        },
      });
      dispatch({
        type: SET_CURSOR_SIZE,
        payload: {
          size: {
            width: e.target.offsetWidth + (smaller ? -5 : 0),
            height: e.target.offsetHeight + (smaller ? -2 : 0),
          },
        },
      });
    }
  };

  return {
    onMouseEnter: (e) => linkHover(e, "link"),
    onMouseLeave: linkHover,
    style: { zIndex: 1000 },
  };
};
