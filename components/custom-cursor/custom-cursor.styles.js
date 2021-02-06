import styled from "styled-components";

export const Cursor = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  background: ${(props) => props.theme.cursor};
  border-radius: 100%;
  pointer-events: none;
  z-index: 1000;

  &.pointer,
  &.locked {
    display: none;
  }
`;

export const CursorBackground = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  margin: -25px 0 0 -25px;
  background: transparent;
  border: 2px solid ${(props) => props.theme.cursorBackground};
  border-radius: 100%;
  transition: 300ms opacity cubic-bezier(0.39, 0.575, 0.565, 1),
    200ms transform cubic-bezier(0.39, 0.575, 0.565, 1), 150ms;
  pointer-events: none;
  z-index: 999;

  &.locked {
    width: 50px;
    height: 50px;
    border: 3px solid gray;
    margin: -28px 0 0 -28px;
    transform: translate(
      ${(props) => props.theme.left},
      ${(props) => props.theme.top}
    ) !important;
    backface-visibility: hidden;
  }

  &.link {
    border-radius: 0.5rem;
    width: calc(${(props) => props.theme.width} + 2rem);
    height: calc(${(props) => props.theme.height} + 0.8rem);
    border: none;
    background-color: ${(props) => props.theme.primary};
    margin: -4px -10px;
    transform: translate(
      ${(props) => props.theme.left},
      ${(props) => props.theme.top}
    ) !important;
    backface-visibility: hidden;
  }

  &.pointer {
    border: none;
    width: 50px;
    height: 50px;
    z-index: 1;
    background: ${(props) => props.theme.cursorBackground};
  }
`;
