import styled from "styled-components";

import { Phase1 } from "./phase-1";
import { Progress } from "./progress";
import { Phase2 } from "./phase-2";
import { Phase3 } from "./phase-3";
import { Phase4 } from "./phase-4";
import { Card } from "../../components/common";

export const Main = () => {
  return (
    <Container>
      <Progress />
      <Content>
        <Title>ENGC Rewards Journey</Title>
        <Phase1 />
        <Phase2 />
        <Phase3 />
        <Phase4 />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
`;

const Content = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
`;

const Title = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text xl/Semibold */

  font-size: var(--Font-size-text-xl, 20px);

  font-weight: 600;
  line-height: var(--Line-height-text-xl, 30px); /* 150% */
`;
