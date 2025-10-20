import styled from "styled-components";
import { Title } from "./common";

export const Journey = () => {
  return (
    <Container>
      <Title>The ENGC Journey Has Just Begun</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  .react-multiple-carousel__arrow {
    display: none;
  }
`;

// const Card = styled.div`
//   display: flex;
//   height: 284px;
//   padding: var(--spacing-9xl, 96px) var(--spacing-6xl, 48px);
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;
//   border-radius: var(--radius-4xl, 24px);
//   border: 4px solid var(--Gradient-Linear-Color-26, #39a0ff);
//   background: var(--Colors-Background-bg-primary, #0c111d);
// `;
