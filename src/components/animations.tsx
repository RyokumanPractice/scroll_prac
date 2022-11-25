import { css } from "styled-components";

function change(color: string) {
  const animation = css`
    animation-name: ${color};
    animation-duration: 2s;
    animation-fill-mode: forwards;

    @keyframes ${color} {
      from {
        background-color: ${color === "red" && color !== undefined ? "blue" : "red"};
      }
      to {
        background-color: ${color};
      }
    }
  `;

  return animation;
}

export default change;
