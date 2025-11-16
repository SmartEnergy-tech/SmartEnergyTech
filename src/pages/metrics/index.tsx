import styled from "styled-components";
import { Card } from "../../components/common";
import { TVL } from "./tvl";
import { Unlocked } from "./unlocked";
import { User } from "./user";
import { Top } from "./top";

export const MetricsPage = () => {
  return (
    <Container>
      <Column>
        <TVL />
        <Unlocked />
      </Column>
      <Column>
        <User />
        <Top />
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl, 24px);
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl, 24px);
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
`;
