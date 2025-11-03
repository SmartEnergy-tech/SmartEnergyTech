import styled from "styled-components";

import { Main } from "./main";
import { Factory } from "./factory";

export const DashboardPage = () => {
  return (
    <Container>
      <Main />
      <Factory />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 452px;
  gap: 16px;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    > :first-child {
      order: 2;
    }
    > :last-child {
      order: 1;
    }
  }
`;
