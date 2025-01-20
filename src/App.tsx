import { useState } from "react";
import HanKeyboard from "./components/HanKeyboard";
import styled from "styled-components";
import GlobalStyle from "./style/globalStyle";

function App() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Container>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setShow(true)}>Show Keyboard</button>
        <HanKeyboard
          value={value}
          onChange={(e) => setValue(e.target.value)}
          inputType="number"
          show={show}
          onClose={() => setShow(false)}
        />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
`;
