import styled from "styled-components";
import { useMemo, useState } from "react";

import { RangeInput } from "../../components/input";
import { PrimaryButton } from "../../components/button";
import { Info, Title } from "./common";

export const Simulate = () => {
  const [weeklyContribution, setWeeklyContribution] = useState(125);
  const [weeks, setWeeks] = useState(100);
  const maxContribution = 250;
  const maxWeeks = 200;

  const percentage = useMemo(() => {
    return Number((((weeks * weeklyContribution) / (maxContribution * maxWeeks)) * 100).toFixed(2)) * 1;
  }, [weeks, weeklyContribution, maxContribution, maxWeeks]);

  return (
    <Container>
      <Title>Simulate Your Stake</Title>
      <Info style={{ maxWidth: "608px" }}>
        Use the calculator below to explore how your weekly contribution grows over time and what kind of ownership
        share you unlock.
      </Info>
      <Cards>
        <Card>
          <Label>Weekly contribution</Label>
          <Value>
            <div>{weeklyContribution}</div>
            <div>USDC</div>
          </Value>
          <RangeInput
            min={0}
            max={maxContribution}
            value={weeklyContribution}
            onChange={(e) => setWeeklyContribution(+e.target.value)}
          />
          <Label style={{ marginTop: 24 }}>Duration</Label>
          <Value>
            <div>{weeks}</div>
            <div>weeks</div>
          </Value>
          <RangeInput min={0} max={maxWeeks} value={weeks} onChange={(e) => setWeeks(+e.target.value)} />
          <Tip style={{ marginTop: 24 }}>
            *This is a projection based on test-phase parameters. Actual returns depend on real factory performance. Not
            financial advice.
          </Tip>
        </Card>
        <Card>
          <Label>Approx. ENGC tokens unlocked</Label>
          <TokensAmount>
            <div>{weeklyContribution * weeks}</div>
            <div>ENGC</div>
          </TokensAmount>
          <Tip style={{ marginBottom: 24 }}>*You'll receive your tokens over time as you contribute.</Tip>
          <Label style={{ marginBottom: 8 }}>Estimated ownership percentage</Label>
          <Value>
            <div>{percentage}</div>
            <div>%</div>
          </Value>
          <PrimaryButton style={{ marginTop: "auto", fontSize: "18px", padding: "14px 20px", lineHeight: "28px" }}>
            Start Contributing
          </PrimaryButton>
        </Card>
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cards = styled.div`
  display: flex;
  gap: 4px;
  max-width: 786px;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px;
  border-radius: 24px;
  border: 2px solid #1f242f;
  background: var(--bg-primary, #0c111d);
`;

const Label = styled.div`
  color: var(--tertiary-600, #94969c);
  font-weight: 500;
  margin-bottom: 8px;
`;

const Value = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
  gap: 4px;
  > div:first-of-type {
    color: var(--text-primary-900, #f5f5f6);
    font-family: "Outfit";
    font-size: 30px;
    font-weight: 700;
    line-height: 38px; /* 126.667% */
    margin-right: 4px;
  }
  > div:last-of-type {
    color: var(--tertiary-600, #94969c);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px; /* 155.556% */
  }
`;

const Tip = styled.div`
  color: var(--tertiary-600, #94969c);
  font-size: 14px;
  line-height: 20px; /* 142.857% */
`;

const TokensAmount = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
  gap: 4px;
  > div:first-of-type {
    background: var(--Gradient-Linear-Color-26, linear-gradient(45deg, #39a0ff 0%, #8fff85 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: var(--Font-family-font-family-display, Outfit);
    font-size: var(--Font-size-display-md, 36px);
    font-weight: 700;
    line-height: var(--Line-height-display-md, 44px); /* 122.222% */
    letter-spacing: -0.72px;
  }
  > div:last-of-type {
    color: var(--tertiary-600, #94969c);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px; /* 155.556% */
  }
`;
