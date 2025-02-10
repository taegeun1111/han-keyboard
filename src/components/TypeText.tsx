import React from "react";
import { koreanLayout } from "../constants/kioskKeyboardKoreanLayout";
import styled from "styled-components";
import { TypeNumberKeyboardType } from "../types/kioskKeyboardInputType";
import { getKeyStyles, getKeyType } from "../utils/keyboardUtils";
import { KeyType } from "../types/keyboardUtilTypes";

interface TypeNumberProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface NumberRowProps {
  $keyType: KeyType;
}

const TypeText = ({ onChange, value }: TypeNumberProps) => {
  const handleClick = (type: TypeNumberKeyboardType | string) => {
    let newValue: string;

    switch (type) {
      case "{bksp}":
        newValue = value.toString().slice(0, -1);
        break;
      case "{empty}":
        return;
      default:
        // 중괄호가 포함된 다른 문자열 처리
        if (
          typeof type === "string" &&
          type.length !== 1 &&
          type.includes("{") &&
          type.includes("}")
        ) {
          newValue = value.toString() + type.replace(/[{}]/g, "");
        } else {
          // 일반 숫자나 문자의 경우
          newValue = value.toString() + type;
        }
        break;
    }

    // ChangeEvent 객체 생성
    const event = {
      target: {
        value: newValue,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(event);
  };

  const findNotNumber = (type: TypeNumberKeyboardType | string) => {
    // edge case
    switch (type) {
      case "{empty}":
        return "";
      case "{bksp}":
        return <BackspaceIcon />;
      default:
        // 중괄호가 포함된 다른 문자열 처리
        if (
          typeof type === "string" &&
          type.length !== 1 &&
          type.includes("{") &&
          type.includes("}")
        ) {
          return type.replace(/[{}]/g, "");
        }
        return type;
    }
  };

  return (
    <NumberContainer>
      {koreanLayout.default.map((row, rowIndex) => (
        <NumberRowWrapper key={rowIndex}>
          {/* 공백을 기준으로 나누되, 중괄호 안의 내용은 보존 */}
          {row.match(/({[^}]+}|\S+)/g)?.map((key, keyIndex) => (
            <NumberRow
              key={`${rowIndex}-${keyIndex}`}
              onClick={() => handleClick(key)}
              $keyType={getKeyType(key)}
            >
              {findNotNumber(key)}
            </NumberRow>
          ))}
        </NumberRowWrapper>
      ))}
    </NumberContainer>
  );
};

export default TypeText;

const BackspaceIcon = () => (
  <BackspaceIconWrapper
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    className="size-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
    />
  </BackspaceIconWrapper>
);

const BackspaceIconWrapper = styled.svg`
  width: 2rem;
  height: auto;
`;

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
  box-shadow: 0 0 3px -1px #0000004d;
  box-sizing: border-box;
  font-weight: 300;
  width: 4.3rem;
  height: 4.3rem;

  &:active {
    background-color: rgb(250, 250, 250);
    box-shadow: none;
    transform: scale(0.98);
  }

  ${(props) => getKeyStyles(props.$keyType)}
`;
