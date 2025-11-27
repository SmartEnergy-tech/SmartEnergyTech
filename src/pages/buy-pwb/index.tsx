import styled from "styled-components";
import { useState } from "react";

import { Card, Divider } from "../../components/common";
import powerbankImg from "../../assets/powerbank.png";
import { RangeInput } from "../../components/input";

export const BuyPWBPage = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 1.8;

  return (
    <Container>
      <Card>
        <PwbInfo>
          <img src={powerbankImg} />
          <PwbDetails>
            <div className="price">CHF {price.toLocaleString("en-US", { minimumFractionDigits: 2 })}</div>
            <Divider />
            <div className="duration-label">Duration</div>
            <div className="duration-value">24 Hours</div>
          </PwbDetails>
        </PwbInfo>
        <QuantityCard>
          <div className="title">Choose Quantity</div>
          <RangeInput
            min={1}
            max={15}
            value={quantity}
            onChange={(val) => setQuantity(+val)}
            step={1}
            showSteps
            showValue
          />
        </QuantityCard>
        <ToPayContainer>
          <ToPayRow>
            <div className="label">1 PWB</div>
            <div className="value">CHF {price.toLocaleString("en-US", { minimumFractionDigits: 2 })}</div>
          </ToPayRow>
          <ToPayRow>
            <div className="label">Quantity</div>
            <div className="value">{quantity}</div>
          </ToPayRow>
          <Divider />
          <ToPayRow>
            <div className="totalLabel">Total to pay</div>
            <div className="totalAmount">
              CHF {(price * quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </div>
          </ToPayRow>
        </ToPayContainer>
      </Card>
      <Card>revolut pay</Card>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
  gap: 16px;
`;

const PwbInfo = styled(Card)`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl, 16px);
  margin-bottom: var(--spacing-3xl, 24px);
  border-radius: var(--radius-4xl, 24px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
  img {
    border-radius: var(--radius-2xl, 16px);
    max-height: 97px;
  }
`;

const PwbDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .price {
    /* Text lg/Bold */

    font-size: var(--Font-size-text-lg, 18px);

    font-weight: 700;
    line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
    background: var(--Gradient-Linear-Color-81, linear-gradient(45deg, #4b73ff 0%, #7cf7ff 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .duration-label {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text md/Medium */

    font-weight: 500;

    margin-bottom: var(--spacing-md, 8px);
  }
  .duration-value {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Text md/Medium */

    font-weight: 500;
  }
`;

const QuantityCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs, 4px);
  border-radius: var(--radius-3xl, 20px) var(--radius-3xl, 20px) var(--radius-md, 8px) var(--radius-md, 8px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  .title {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    font-weight: 500;
  }
`;

const ToPayContainer = styled(Card)`
  margin-top: var(--spacing-xs, 4px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  border-radius: var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-3xl, 20px) var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);
`;

const ToPayRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .label,
  .value,
  .totalLabel,
  .totalAmount {
    /* Text md/Medium */

    font-weight: 500;
  }
  .label {
    color: var(--colors-text-text-tertiary-600, #94969c);
  }
  .value {
    color: var(--colors-text-text-primary-900, #f5f5f6);
  }
  .totalLabel {
    color: var(--colors-text-text-primary-900, #f5f5f6);
    font-weight: 700;
  }
  .totalAmount {
    font-weight: 700;
    background: var(--Gradient-Linear-Color-81, linear-gradient(45deg, #4b73ff 0%, #7cf7ff 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
