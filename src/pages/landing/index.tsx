import styled from "styled-components";

import { Header } from "../../components/header";
import { Join } from "./join";
import { HowYouBecomeCoOwner } from "./how-you-become-co-owner";
import { Simulate } from "./simulate";
import { CoOwnerInfo } from "./co-owner-info";
import { Journey } from "./journey";
import { Supporters } from "./supporters";
import { Alliances } from "./alliances";
import { Footer } from "../../components/footer";

export const LandingPage = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Join />
        <HowYouBecomeCoOwner />
        <Simulate />
        <CoOwnerInfo />
        <Journey />
        <Supporters />
        <Alliances />
        <Footer />
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
  max-width: 1312px;
  padding: 0px 16px;
  width: 100%;
  margin: 0 auto;
  > :not(div:first-of-type):not(div:last-of-type) {
    margin: 64px auto 128px;
    @media (max-width: 769px) {
      margin: 16px auto 32px;
    }
  }
`;
