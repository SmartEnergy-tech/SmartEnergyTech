import styled from "styled-components";

export const Phase4 = () => {
  return (
    <Container>
      <Title>Phase 4</Title>
      <Info>Coming Soon</Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-lg, 12px);
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const Title = styled.div`
  color: var(--colors-text-text-secondary-700, #cecfd2);

  /* Text lg/Medium */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-lg, 18px);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
`;

const Info = styled.div`
  color: var(--colors-foreground-fg-quaternary-500, #94969c);

  /* Display xs/Semibold */
  font-family: var(--Font-family-font-family-display, Outfit);
  font-size: var(--Font-size-display-xs, 24px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-display-xs, 32px); /* 133.333% */
`;
