import styled from "styled-components";

export const Simulate = () => {
  return (
    <Container>
      <Title>Simulate Your Stake</Title>
      <Info>
        Use the calculator below to explore how your weekly contribution grows over time and what kind of ownership
        share you unlock.
      </Info>
      <Cards>
        <Card>Weekly contribution</Card>
        <Card>Approx. ENGC tokens unlocked</Card>
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 64px auto 128px;
`;

const Title = styled.div`
  margin-bottom: 8px;
`;

const Info = styled.div`
  max-width: 608px;
  text-align: center;
  margin-bottom: 32px;
`;

const Cards = styled.div`
  display: flex;
  gap: 4px;
  max-width: 786px;
  width: 100%;
`;

const Card = styled.div`
  width: 100%;
  padding: 32px;
  border-radius: 24px;
  border: 2px solid #1f242f;
  background: var(--bg-primary, #0c111d);
`;
