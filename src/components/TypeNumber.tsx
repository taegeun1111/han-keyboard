import React, { useState } from "react";
import { numericLayout } from "../constants/kioskKeyboardKoreanLayout";
import styled from "styled-components";

const TypeNumber = () => {
  return (
    <NumberContainer>
      {numericLayout.default.map((row, index) => (
        <NumberRowWrapper key={index}>
          {row.split(" ").map((key, index) => (
            <NumberRow key={index}>{key}</NumberRow>
          ))}
        </NumberRowWrapper>
      ))}
    </NumberContainer>
  );
};

export default TypeNumber;

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
  padding: 1.5rem 0;
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
