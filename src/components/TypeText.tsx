import React, { useState } from "react";
import { koreanLayout, numericLayout } from "../constants/kioskKeyboardKoreanLayout";
import styled from "styled-components";
import { TypeNumberKeyboardType } from "../types/kioskKeyboardInputType";

interface TypeNumberProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        newValue = value.toString() + type;
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
        return type;
    }
  };

  return (
    <NumberContainer>
      {koreanLayout.default.map((row, index) => (
        <NumberRowWrapper key={index}>
          {row.split(" ").map((key, index) => (
            <NumberRow key={index} onClick={() => handleClick(key)}>
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
  width: 100%;
  gap: 0.4rem;
  margin-bottom: 0.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const NumberRow = styled.div`
  display: flex;
  width: 33.3333333%;
  border: 1px solid rgb(240, 240, 240);
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  background-color: white;
  border-radius: 0.4rem;
  border-bottom: 1px solid rgb(181, 181, 181);
  box-shadow: 0 0 3px -1px #0000004d;
  box-sizing: border-box;
  font-weight: 300;

  &:active {
    background-color: rgb(250, 250, 250);
    box-shadow: none;
    transform: scale(0.98);
  }
`;
