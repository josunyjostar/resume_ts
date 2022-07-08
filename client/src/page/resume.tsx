import React from "react";
import styled from "styled-components";
import { Container } from "../components/styled/container";

const Temp = styled(Container)`
  background-color: #797979;
  width: 100%;

  transition: background-color 1.3s ease;
  display: flex;

  .header {
    background-color: #8c3737;
    height: 200px;
  }
  .banner {
    background-color: #26447f;
    height: 100px;
  }
  .content {
    background-color: #437422;
    height: calc(100vh - 500px);
  }
  .footer {
    background-color: #be8c0f;
    height: 200px;
  }
`;

function Resume() {
  return (
    <Temp>
      <header className="header">header</header>
      <section className="banner">banner</section>
      <section className="content">content</section>
      <footer className="footer">footer</footer>
    </Temp>
  );
}

export default Resume;
