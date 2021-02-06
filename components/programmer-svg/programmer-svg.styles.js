import styled from "styled-components";

export const ProgrammerSVGLayout = styled.svg`
  visibility: hidden;
  width: 50vw;

  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);

  .card-body {
    visibility: hidden;
    background: green;
    border-radius: 2rem;
    width: 250px;
    height: 250px;
    font-size: 2rem;
  }

  .svg-primary {
    fill: var(--primary-color);
  }
`;
