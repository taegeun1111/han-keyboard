import { css } from "styled-components";
import { KeyType } from "../types/keyboardUtilTypes";

export const getKeyType = (key: string): KeyType => {
  switch (key) {
    case "{space}":
      return "space";
    case "{bksp}":
      return "bksp";
    case "{shift}":
      return "shift";
    case "{empty}":
      return "empty";
    case "{한/영}":
      return "language";
    case "{tab}":
      return "tab";
    case "{capslock}":
      return "capslock";
    case "{return}":
      return "return";
    default:
      return "normal";
  }
};

export const getKeyStyles = (keyType: KeyType) => {
  switch (keyType) {
    case "space":
      return css`
        flex: 2.5;
      `;
    case "empty":
      return css`
        flex: 1;
      `;
    case "language":
      return css`
        flex: 1;
        letter-spacing: 0.15rem;
      `;
    case "bksp":
      return css`
        flex: 2;
      `;
    case "shift":
      return css`
        flex: 2.3;
      `;
    case "tab":
      return css`
        flex: 1;
      `;
    case "capslock":
    case "return":
      return css`
        flex: 1;
      `;
    default:
      return css``;
  }
};
