import React, { createContext, useReducer, useContext } from "react";

export const TOGGLE_THEME = "TOGGLE_THEME";
export const SET_CURSOR_TYPE = "SET_CURSOR_TYPE";
export const SET_CURSOR_POSITION = "SET_CURSOR_POSITION";
export const SET_CURSOR_SIZE = "SET_CURSOR_SIZE";

function globalReducer(state, action) {
  switch (action.type) {
    case SET_CURSOR_TYPE: {
      return {
        ...state,
        cursorType: action.payload.cursorType,
      };
    }
    case SET_CURSOR_POSITION: {
      return {
        ...state,
        cursorPosition: action.payload.position,
      };
    }
    case SET_CURSOR_SIZE: {
      return {
        ...state,
        cursorSize: action.payload.size,
      };
    }

    default:
      return state;
  }
}

const GlobalStateContext = createContext(undefined);
const GlobalDispatchContext = createContext(undefined);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    cursorType: false,
    cursorPosition: { x: 0, y: 0 },
    cursorSize: { width: 50, height: 50 },
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
