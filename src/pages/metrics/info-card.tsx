import type { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  value: string;
  valueBadge?: ReactNode;
}

export const InfoCard = ({ title, value, valueBadge }: Props) => (
  <Container>
    <Title>{title}</Title>
    <Info>
      {value}
      {valueBadge}
    </Info>
  </Container>
);

const Container = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-md, 8px);
  flex: 1 0 0;
  border-radius: var(--radius-xl, 12px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs */
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
  @media (max-width: 769px) {
    padding: var(--spacing-2xl, 20px) var(--spacing-xl, 16px);
  }
`;

const Title = styled.div`
  color: var(--colors-text-text-tertiary-600, #94969c);

  /* Text sm/Medium */

  font-size: var(--Font-size-text-sm, 14px);

  font-weight: 500;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text xl/Bold */

  font-size: var(--Font-size-text-xl, 20px);

  font-weight: 700;
  line-height: var(--Line-height-text-xl, 30px); /* 150% */
`;
