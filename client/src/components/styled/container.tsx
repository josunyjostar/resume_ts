import styled from "styled-components";

export const Container = styled.div`
  /* width: 990px;
  margin: 0 auto;
  height: inherit; */
  /* background: rgba(255, 255, 255, 0.3); */

  width: 100%;

  width: ${(props) => props.theme.webWidth};
  height: auto;
  margin: 0 auto;
  background-color: ${(props) => props.theme.subColor};

  display: flex;
  flex-direction: column;
  justify-content: left;

  padding: 0 ${(props) => props.theme.containerPaddingLR} 0 ${(props) => props.theme.containerPaddingLR};
  font-size: ${(props) => props.theme.subjectFontSize};
`;
