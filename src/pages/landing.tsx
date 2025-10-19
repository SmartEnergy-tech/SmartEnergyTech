import styled from "styled-components";

import { Header } from "../components/header";

export const Landing = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
