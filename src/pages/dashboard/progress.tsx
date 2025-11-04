import styled from "styled-components";

export const Progress = () => {
  return (
    <Container>
      <Title>Your Token Progress</Title>
      <Cards>
        <Card>
          <div>Unlocked Phase 2</div>
          <div>18,875 ENGC</div>
        </Card>
        <Card>
          <div>Total Allocated</div>
          <div>134,000 ENGC</div>
        </Card>
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const Title = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text xl/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-xl, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-xl, 30px); /* 150% */
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl, 16px);
  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  padding: var(--spacing-xl, 16px);
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-md, 8px);

  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  > div:first-of-type {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text md/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-md, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-md, 24px); /* 150% */
  }
  > div:last-of-type {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Display xs/Bold */
    font-family: var(--Font-family-font-family-display, Outfit);
    font-size: var(--Font-size-display-xs, 24px);
    font-style: normal;
    font-weight: 700;
    line-height: var(--Line-height-display-xs, 32px); /* 133.333% */
  }
`;
