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
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setShow(true)}>Show Keyboard</button>
      <select
        value={inputType}
        onChange={(e) => setInputType(e.target.value as KioskKeyboardInputType)}
      >
        <option value="number">number</option>
        <option value="text">text</option>
      </select>
      <input type="checkbox" checked={show} onChange={() => setShow(!show)} />
      <HanKeyboard
        value={value}
        onChange={(e) => setValue(e.target.value)}
        inputType={inputType}
        show={show}
        onClose={() => setShow(false)}
        showOverlay={false}
      />
    </>
  );
}

export default App;
