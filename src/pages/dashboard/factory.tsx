import styled, { css } from "styled-components";

import factoryImg from "../../assets/factory.png";
import PowerBankImg from "../../assets/power-bank.svg?react";
import { useState } from "react";
import { PrimaryButton } from "../../components/button";
import { ProgressIndicator } from "../../components/progress-indicator";

export const Factory = () => {
  const [selected, setSelected] = useState("24");

  return (
    <Container>
      <Status>
        <div className="label">Factory Status</div>
        <div className="status">Idle</div>
      </Status>
      <Content>
        <FactoryImgContainer>
          <img src={factoryImg} />
        </FactoryImgContainer>
        <YourPowerBanks>
          <div>Your Powerbanks</div>
          <div>
            Longer hours <span>PWBs</span> unlock ENGC for longer durations without reactivation.
          </div>
        </YourPowerBanks>
        <PowerBanks>
          <PowerBank $selected={selected === "3"} onClick={() => setSelected("3")}>
            <div className="info">
              <PowerBankImg />
              <div className="time">3H</div>
            </div>
            <div className="amount">8,798,874 PWB</div>
          </PowerBank>
          <PowerBank $selected={selected === "12"} onClick={() => setSelected("12")}>
            <div className="info">
              <PowerBankImg />
              <div className="time">12H</div>
            </div>
            <div className="amount">6,000 PWB</div>
          </PowerBank>
          <PowerBank $selected={selected === "6"} onClick={() => setSelected("6")}>
            <div className="info">
              <PowerBankImg />
              <div className="time">6H</div>
            </div>
            <div className="amount">798,874 PWB</div>
          </PowerBank>
          <PowerBank $selected={selected === "24"} onClick={() => setSelected("24")}>
            <div className="info">
              <PowerBankImg />
              <div className="time">24H</div>
            </div>
            <div className="amount">100 PWB</div>
          </PowerBank>
        </PowerBanks>
        <Divider />
        <UnlockingRate>
          <div>Unlocking Rate (Q)</div>
          <div>0,0005 ENGC / Sec</div>
        </UnlockingRate>
        <StyledButton>Power for {selected} Hours</StyledButton>
        <ProgressIndicator progress={20} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
  height: fit-content;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-xl, 16px) var(--spacing-3xl, 24px);
  gap: var(--spacing-lg, 12px);

  border-radius: var(--radius-3xl, 20px) var(--radius-3xl, 20px) var(--radius-none, 0) var(--radius-none, 0);
  border-top: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  border-right: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  border-left: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);

  .label {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Text xl/Semibold */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-xl, 20px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-text-xl, 30px); /* 150% */
  }
  .status {
    /* Text xl/Semibold */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-xl, 20px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-text-xl, 30px); /* 150% */

    background: var(--Gradient-Linear-Color-66, linear-gradient(45deg, #ff7a00 0%, #ffd439 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Content = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
`;

const FactoryImgContainer = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const YourPowerBanks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 4px);

  > div:first-of-type {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Text lg/Semibold */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-lg, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  }
  > div:last-of-type {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text lg/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-lg, 18px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
    > span {
      color: var(--colors-text-text-secondary-700, #cecfd2);

      /* Text lg/Semibold */
      font-family: var(--Font-family-font-family-body, Inter);
      font-size: var(--Font-size-text-lg, 18px);
      font-style: normal;
      font-weight: 600;
      line-height: var(--Line-height-text-lg, 28px);
    }
  }
`;

const PowerBanks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg, 12px);
`;

const PowerBank = styled.div<{ $selected: boolean }>`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: var(--spacing-xl, 16px) var(--spacing-lg, 12px);
  gap: var(--spacing-md, 8px);
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);
  .info {
    display: flex;
    padding: var(--spacing-xs, 4px) 10px var(--spacing-xs, 4px) var(--spacing-md, 8px);
    align-items: center;
    gap: var(--spacing-xs, 4px);
    border-radius: var(--radius-md, 8px);
    border: 1px solid var(--Component-colors-Utility-Gray-utility-gray-200, #333741);
    background: var(--Component-colors-Utility-Gray-utility-gray-50, #161b26);

    .time {
      color: var(--Component-colors-Utility-Gray-utility-gray-700, #cecfd2);
      text-align: center;

      /* Text sm/Medium */
      font-family: var(--Font-family-font-family-body, Inter);
      font-size: var(--Font-size-text-sm, 14px);
      font-style: normal;
      font-weight: 500;
      line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
    }
  }
  .amount {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Text sm/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-sm, 14px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }

  ${({ $selected }) =>
    $selected &&
    css`
      border-radius: var(--radius-3xl, 20px);
      border: 1px solid var(--Colors-Border-border-brand, #33f4ed);
      background: var(--Colors-Background-bg-secondary, #161b26);
      .info {
        border-radius: var(--radius-md, 8px);
        border: 1px solid var(--Component-colors-Utility-Blue-light-utility-blue-light-200, #065986);
        background: var(--Component-colors-Utility-Blue-light-utility-blue-light-50, #062c41);
        path {
          stroke: #0ba5ec;
        }
        .time {
          color: var(--Component-colors-Utility-Blue-light-utility-blue-light-700, #7cd4fd);
        }
      }
    `}

  &:hover {
    border-radius: var(--radius-3xl, 20px);
    border: 1px solid var(--Colors-Border-border-brand, #33f4ed);
    background: var(--Colors-Background-bg-secondary, #161b26);
    .info {
      border-radius: var(--radius-md, 8px);
      border: 1px solid var(--Component-colors-Utility-Blue-light-utility-blue-light-200, #065986);
      background: var(--Component-colors-Utility-Blue-light-utility-blue-light-50, #062c41);
      path {
        stroke: #0ba5ec;
      }
      .time {
        color: var(--Component-colors-Utility-Blue-light-utility-blue-light-700, #7cd4fd);
      }
    }
  }
`;

const Divider = styled.div`
  border-radius: var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);
`;

const UnlockingRate = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md, 8px);
  > * {
    /* Text lg/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-lg, 18px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  }
  > div:first-of-type {
    color: var(--colors-text-text-tertiary-600, #94969c);
  }
  > div:last-of-type {
    color: var(--colors-text-text-primary-900, #f5f5f6);
    font-weight: 600;
  }
`;

const StyledButton = styled(PrimaryButton)`
  padding: var(--spacing-xl, 16px) 22px;
  color: var(--Component-colors-Components-Buttons-Primary-button-primary-fg, #fff);

  /* Text lg/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-lg, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
`;
