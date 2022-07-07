import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Resume from "./page/resume";

const RootLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  overflow-x: hidden;

  width: 100vw;
  height: 100vh;
  position: relative;

  background-color: ${(props) => props.theme.mainColor};
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RootLayout>
        <Resume />
      </RootLayout>
    </ThemeProvider>
  );
}

export default App;
