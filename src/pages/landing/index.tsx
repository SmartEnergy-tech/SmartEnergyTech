import styled from "styled-components";

import { Header } from "../../components/header";
import { Join } from "./join";
import { HowYouBecomeCoOwner } from "./how-you-become-co-owner";
import { Simulate } from "./simulate";

export const Landing = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Join />
        <HowYouBecomeCoOwner />
        <Simulate />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--bg-primary, #0c111d);
`;

const Content = styled.div`
  max-width: var(--container-max-width-desktop, 1280px);
  width: 100%;
  margin: 0 auto;
`;
