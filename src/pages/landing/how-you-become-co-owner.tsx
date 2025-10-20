import styled from "styled-components";

import { Info, Title } from "./common";

export const HowYouBecomeCoOwner = () => (
  <Container>
    <Title>How you become a co-owner</Title>
    <Info>It's simple. You buy a stake, we build the factory, and you earn as it operates.</Info>
    <Blocks>
      <Block>
        <div>Buy an NFT</div>
        <div>
          Each NFT represents a fixed share in ENGC's infrastructure pool. The earlier you join, the more impact you
          have.
        </div>
      </Block>
      <Block>
        <div>Fund the Build</div>
        <div>
          Your contribution helps construct waste-to-energy factories that produce electricity by turning trash into RDF
          pellets.
        </div>
      </Block>
      <Block>
        <div>Earn Weekly Returns</div>
        <div>You receive weekly rewards as the factory sells energy, distributed through ENGC tokens.</div>
      </Block>
      <Block>
        <div>You Own Everything</div>
        <div>
          When you buy an NFT, you're not supporting a company — you're funding infrastructure that you own alongside
          the community. Your ownership is on-chain and fully verifiable.
        </div>
      </Block>
    </Blocks>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
`;

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  > div:nth-of-type(1) {
    width: 33%;
  }
  > div:nth-of-type(2) {
    width: 66%;
  }
  > div:nth-of-type(3) {
    width: 66%;
  }
  > div:nth-of-type(4) {
    width: 33%;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    > div {
      width: 100% !important;
    }
  }
`;

const Block = styled.div`
  padding: 32px;
  border-radius: 24px;
  background: var(--bg-secondary, #161b26);
  display: flex;
  flex-direction: column;
  gap: 8px;
  > div:first-of-type {
    color: var(--text-primary-900, #f5f5f6);
    font-size: 20px;
    font-weight: 700;
  }
  > div:last-of-type {
    color: var(--text-secondary-700, #cecfd2);
  }
  height: 380px;
  @media (max-width: 769px) {
    height: auto;
  }
`;
