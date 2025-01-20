import React, { useEffect, useRef, useState } from "react";
import { KioskKeyboardInputType } from "../types/kioskKeyboardInputType";
import styled from "styled-components";
import TypeNumber from "./TypeNumber";

interface KioskKeyboardProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: KioskKeyboardInputType;
  show: boolean;
  onClose: () => void;
  showOverlay: boolean;
}

const HanKeyboard = ({
  value,
  onChange,
  inputType,
  show,
  onClose,
  showOverlay = false,
}: KioskKeyboardProps) => {
  const [isKorean, setIsKorean] = useState(true);
  const [layoutName, setLayoutName] = useState("default");
  const keyboardRef = useRef(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputType === "number") {
      setIsKorean(false);
    }
  }, [inputType]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  const renderKeyboard = () => {
    if (inputType === "number") {
      return (
        <KeyboardContent className="number">
          <TypeNumber onChange={onChange} value={value} />
          {/* keyboard number type section */}
        </KeyboardContent>
      );
    }

    if (inputType === "text") {
      return (
        <KeyboardContent className="text">
          {/* keyboard text type section */}
        </KeyboardContent>
      );
    }

    return null;
  };

  return (
    <ModalWrapper>
      {showOverlay && <ModalOverlay />}
      <ModalContainer ref={modalRef}>
        <ModalHeader>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>{renderKeyboard()}</ModalBody>
      </ModalContainer>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  border-radius: 12px 12px 0 0;
  padding: 0.4rem;
  z-index: 1001;
  animation: slideUp 0.3s ease-out;
  background-color: #ececec;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0 8px;
`;

const ModalBody = styled.div`
  width: 100%;
`;

const KeyboardContent = styled.div`
  width: 100%;

  &.number {
    /* 숫자 키보드 스타일 */
  }

  &.text {
    /* 텍스트 키보드 스타일 */
  }
`;

export default HanKeyboard;
