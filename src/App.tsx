import { useState } from "react";
import HanKeyboard from "./components/HanKeyboard";
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { KioskKeyboardInputType } from "./types/kioskKeyboardInputType";

function App() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState<KioskKeyboardInputType>("text");

  return (
    <>
      <GlobalStyle />
      <Container>
        <TextInput
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <ShowKeyboardButton onClick={() => setShow(true)}>
          Show Keyboard
        </ShowKeyboardButton>
        <LogTest onClick={() => console.log(value)}>
          <p>value: {value}</p>
          <p>show: {show.toString()}</p>
        </LogTest>
        <SelectOption
          value={inputType}
          onChange={(e) =>
            setInputType(e.target.value as KioskKeyboardInputType)
          }
        >
          <option value="number">number</option>
          <option value="text">text</option>
        </SelectOption>
        <HanKeyboard
          value={value}
          onChange={(e) => setValue(e.target.value)}
          inputType={inputType}
          show={show}
          onClose={() => setShow(false)}
          showOverlay={false}
        />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  font-size: 1rem;
`;

const TextInput = styled.input`
  width: 100%;
  height: 100%;
`;

const ShowKeyboardButton = styled.button`
  width: 100%;
  height: 100%;
`;

const LogTest = styled.div`
  width: 100%;
  height: 100%;
`;

const SelectOption = styled.select`
  width: 100%;
  height: 100%;
`;
