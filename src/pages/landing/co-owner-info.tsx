import styled from "styled-components";

import { Info, Title } from "./common";

const data = [
  {
    title: "Collective Ownership",
    info: "Each NFT gives you a piece of the infrastructure",
  },
  { title: "Sustainable Earning", info: "You benefit as real factories generate energy and revenue" },
  { title: "", info: "" },
  { title: "", info: "" },
  { title: "", info: "" },
  { title: "", info: "" },
  { title: "Decentralized Structure", info: "No central authority, everything runs through smart contracts" },
  { title: "Impact at Scale", info: "The more we build together, the bigger the environmental shift" },
];
export const CoOwnerInfo = () => (
  <Container>
    <Title>You're Not a Customer. You're a Co-Owner.</Title>
    <Info style={{ maxWidth: "716px" }}>
      ENGC is an association of individuals who co-fund, co-own, and co-benefit from sustainable energy infrastructure.
      You don't buy a product — you build the solution.
    </Info>
    <Cards>
      {data.map(({ title, info }, index) =>
        title ? (
          <Card key={title}>
            <CardTitle>{title}</CardTitle>
            <CardInfo>{info}</CardInfo>
          </Card>
        ) : (
          <EmptyCard key={index} />
        )
      )}
    </Cards>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  height: 258px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 32px;
  border-radius: var(--radius-4xl, 24px);
  border: 2px solid var(--Colors-Border-border-tertiary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;
const CardTitle = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);
  text-align: center;

  font-size: var(--Font-size-text-xl, 20px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-height-text-xl, 30px); /* 150% */
`;

const CardInfo = styled.div`
  color: var(--colors-text-text-secondary-700, #cecfd2);
  text-align: center;

  /* Text md/Regular */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-md, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--Line-height-text-md, 24px); /* 150% */
`;

const EmptyCard = styled.div`
  border-radius: var(--radius-4xl, 24px);
  border: 2px solid var(--Colors-Border-border-tertiary, #1f242f);
  background: var(--Colors-Background-bg-tertiary, #1f242f);
  height: 258px;
  padding: var(--spacing-4xl, 32px);
`;
