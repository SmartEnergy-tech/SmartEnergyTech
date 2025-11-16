import styled from "styled-components";
import { Dropdown } from "../../components/common/dropdown";
import { useMemo, useState } from "react";
import { items, powerOptions, sorbByOptions, typeOptions } from "./data";
import { SecondaryButton } from "../../components/button";

export const MarketplacePage = () => {
  const [selectedPower, setSelectedPower] = useState("powerbanks");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSortBy, setSelectedSortBuy] = useState("lowPrice");

  const sortedItems = useMemo(
    () => items.sort((a, b) => (selectedSortBy === "lowPrice" ? a.price - b.price : b.price - a.price)),
    [selectedSortBy, items]
  );

  return (
    <Container>
      <Header>
        <Dropdown options={powerOptions} selected={selectedPower} onChange={(val) => setSelectedPower(val)} />
        <Dropdown options={typeOptions} selected={selectedType} onChange={(val) => setSelectedType(val)} />
        <Dropdown options={sorbByOptions} selected={selectedSortBy} onChange={(val) => setSelectedSortBuy(val)} />
      </Header>
      <Items>
        {sortedItems.map(({ img, duration, quantity, price, priceSymbol }, index) => (
          <Item key={index}>
            <img src={img} />
            <ItemInfo>
              <ItemInfos>
                <InfoRow>
                  <div className="label">Duration</div>
                  <div className="value">{duration} hours</div>
                </InfoRow>
                <InfoRow>
                  <div className="label">Quantity</div>
                  <div className="value">X{quantity.toLocaleString("en-US")}</div>
                </InfoRow>
              </ItemInfos>
              <Divider />
              <ItemPrice>
                {priceSymbol}&nbsp;
                {price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </ItemPrice>
              <SecondaryButton style={{ marginTop: "var(--spacing-xl, 16px)" }}>Buy</SecondaryButton>
            </ItemInfo>
          </Item>
        ))}
      </Items>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
`;

const Header = styled.div`
  padding: var(--spacing-3xl, 24px);
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
  > div:last-of-type {
    margin-left: auto;
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: var(--spacing-3xl, 24px);
  gap: var(--spacing-3xl, 24px);
  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 4px);
  img {
    border-radius: var(--radius-4xl, 24px) var(--radius-4xl, 24px) var(--radius-md, 8px) var(--radius-md, 8px);
  }
`;

const ItemInfo = styled.div`
  display: flex;
  padding: var(--spacing-xl, 16px);
  flex-direction: column;
  border-radius: var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-4xl, 24px) var(--radius-4xl, 24px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const ItemInfos = styled.div`
  display: flex;
  gap: 2px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  > * {
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-md, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-md, 24px); /* 150% */
  }
  .label {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text md/Medium */
  }
  .value {
    color: var(--colors-text-text-primary-900, #f5f5f6);
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--Colors-Border-border-secondary, #1f242f);
  margin: var(--spacing-md, 8px) 0px;
`;

const ItemPrice = styled.div`
  /* Text lg/Bold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-lg, 18px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  background: var(--Gradient-Linear-Color-81, linear-gradient(45deg, #4b73ff 0%, #7cf7ff 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
