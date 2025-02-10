import React, { useState } from "react";
import {
  englishLayout,
  keyboardDisplay,
  koreanLayout,
} from "../constants/kioskKeyboardKoreanLayout";
import styled, { css } from "styled-components";
import { TypeNumberKeyboardType } from "../types/kioskKeyboardInputType";
import { getKeyStyles, getKeyType } from "../utils/keyboardUtils";
import { KeyType } from "../types/keyboardUtilTypes";

interface TypeNumberProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface NumberRowProps {
  $keyType: KeyType;
  $isShiftPressed: boolean;
}

const TypeText = ({ onChange, value }: TypeNumberProps) => {
  const [isShift, setIsShift] = useState(false);
  const [isKorean, setIsKorean] = useState(true);

  const handleClick = (type: TypeNumberKeyboardType | string) => {
    let newValue: string = value.toString(); // 초기값 설정

    switch (type) {
      case "{bksp}":
        newValue = value.toString().slice(0, -1);
        break;
      case "{empty}":
        return;
      case "{shift}":
        setIsShift(!isShift);
        return;
      case "{한/영}":
        setIsKorean(!isKorean);
        return;
      default:
        // keyboardDisplay에서 값을 찾아보고, 없으면 기본 처리
        if (typeof type === "string" && type.includes("{")) {
          const displayValue =
            keyboardDisplay[type as keyof typeof keyboardDisplay];
          if (displayValue) {
            newValue = value.toString() + displayValue;
          }
        } else {
          newValue = value.toString() + type;
        }
        break;
    }

    const event = {
      target: {
        value: newValue,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(event);
  };

  const findDisplayValue = (type: TypeNumberKeyboardType | string) => {
    if (typeof type === "string" && type.includes("{")) {
      // keyboardDisplay에서 표시할 값 찾기
      const displayValue =
        keyboardDisplay[type as keyof typeof keyboardDisplay];

      // displayValue가 undefined나 null이 아닌 경우 (빈 문자열도 유효한 값으로 처리)
      if (displayValue !== undefined && displayValue !== null) {
        // SVG string이 포함된 경우 dangerouslySetInnerHTML 사용
        if (displayValue.includes("<svg")) {
          return <span dangerouslySetInnerHTML={{ __html: displayValue }} />;
        }
        return displayValue;
      }
      // keyboardDisplay에 없는 경우 괄호 제거
      return type.replace(/[{}]/g, "");
    } else {
      console.log(type);
      return type;
    }
  };

  const currentLayout = isKorean ? koreanLayout : englishLayout;

  return (
    <NumberContainer>
      {isShift
        ? currentLayout.shift.map((row, rowIndex) => (
            <NumberRowWrapper key={rowIndex}>
              {row.match(/({[^}]+}|\S+)/g)?.map((key, keyIndex) => (
                <NumberRow
                  key={`${rowIndex}-${keyIndex}`}
                  onClick={() => handleClick(key)}
                  $keyType={getKeyType(key)}
                  $isShiftPressed={key === "{shift}" && isShift}
                >
                  {findDisplayValue(key)}
                </NumberRow>
              ))}
            </NumberRowWrapper>
          ))
        : currentLayout.default.map((row, rowIndex) => (
            <NumberRowWrapper key={rowIndex}>
              {row.split(" ").map((key, keyIndex) => (
                <NumberRow
                  key={`${rowIndex}-${keyIndex}`}
                  onClick={() => handleClick(key)}
                  $keyType={getKeyType(key)}
                  $isShiftPressed={key === "{shift}" && isShift}
                >
                  {findDisplayValue(key)}
                </NumberRow>
              ))}
            </NumberRowWrapper>
          ))}
    </NumberContainer>
  );
};

export default TypeText;

const NumberContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  font-size: 1rem;
`;

const NumberRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0.4rem;
  margin-bottom: 0.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const NumberRow = styled.div<NumberRowProps>`
  display: flex;
  border: 1px solid rgb(240, 240, 240);
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0.4rem;
  border-bottom: 1px solid rgb(181, 181, 181);
  box-shadow: 0 0 3px -1px #7c7c7c4d;
  box-sizing: border-box;
  font-weight: 300;
  width: 3.3rem;
  height: 3.3rem;

  &:active {
    background-color: rgb(250, 250, 250);
    box-shadow: none;
    transform: scale(0.98);
  }

  & svg {
    width: 2rem;
    height: auto;
  }

  ${(props) => getKeyStyles(props.$keyType)}

  ${({ $isShiftPressed }) =>
    $isShiftPressed &&
    css`
      background-color: #dedede;
      color: #1e293b;
      box-shadow: inset 0 2px 6px 0 rgba(0, 0, 0, 0.01);
      border: none;
    `}
`;
