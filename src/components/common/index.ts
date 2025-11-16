import styled from "styled-components";

export const Card = styled.div`
  padding: var(--spacing-3xl, 24px);
  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
  @media (max-width: 769px) {
    padding: var(--spacing-2xl, 20px);
  }
`;
