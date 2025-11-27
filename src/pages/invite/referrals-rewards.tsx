import styled from "styled-components";

import hollowCubeImg from "./hollow-cube.png";
import CubEllipseImg from "./cub-ellipse.svg?react";

export const ReferralRewards = () => {
  return (
    <>
      <ReferralsInfo>
        <Header>
          <SecondIcon>
            <div className="content">
              <CubEllipseImg />
              <img src={hollowCubeImg} />
            </div>
          </SecondIcon>
          <div className="title">Your Referral Rewards</div>
          <div className="amount">
            <div>0</div>
            <div className="symbol">PWD</div>
          </div>
        </Header>
        <Bonuses>
          <div className="title">Referral Bonuses</div>
          <div className="row">
            <div className="dot"></div>
            <div className="place">🥇1st Friend:</div>
            <div className="amount">+10 PWB</div>
          </div>
          <div className="row">
            <div className="dot"></div>
            <div className="place">🥈2nd Friend:</div>
            <div className="amount">+20 PWB</div>
          </div>
          <div className="row">
            <div className="dot"></div>
            <div className="place">🏆3rd+ Friends:</div>
            <div className="amount">+30 PWB/each</div>
          </div>
        </Bonuses>
      </ReferralsInfo>
      <Infos>
        <Info>
          <div className="label">Friends invited:</div>
          <div className="value">8</div>
        </Info>
        <Info>
          <div className="label">Verified friends</div>
          <div className="value">5</div>
        </Info>
      </Infos>
    </>
  );
};

const ReferralsInfo = styled.div``;

const Header = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-radius: var(--radius-3xl, 20px) var(--radius-3xl, 20px) 0 0;
  border-top: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  border-right: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  border-left: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);
  position: relative;
  overflow: hidden;
  @media (max-width: 769px) {
    padding: var(--spacing-2xl, 20px);
  }
  .title {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text md/Bold */

    font-weight: 700;
  }
  .amount {
    display: flex;
    align-items: center;
    gap: 8px;
    > * {
      color: var(--colors-text-text-primary-900, #f5f5f6);

      /* Display xs/Semibold */
      font-family: var(--Font-family-font-family-display, Outfit);
      font-size: var(--Font-size-display-xs, 24px);

      font-weight: 600;
      line-height: var(--Line-height-display-xs, 32px); /* 133.333% */
    }
    .symbol {
      background: var(--Gradient-Linear-Color-81, linear-gradient(45deg, #4b73ff 0%, #7cf7ff 100%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const SecondIcon = styled.div`
  position: absolute;
  right: -47px;
  bottom: -60px;
  .content {
    width: 103px;
    height: 103px;
    position: relative;
    img {
      z-index: 2;
    }
    svg {
      position: absolute;

      filter: blur(50px);
    }
  }
`;

const Bonuses = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);

  border-radius: var(--radius-none, 0) var(--radius-none, 0) var(--radius-3xl, 20px) var(--radius-3xl, 20px);
  border-top: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  border-right: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  border-left: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);

  .title {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text md/Medium */

    font-weight: 500;
  }
  .row {
    display: flex;
    align-items: center;
    width: 100%;
    > * {
      /* Text md/Medium */

      font-weight: 500;
    }
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: linear-gradient(202deg, #7be453 18.61%, #00f1e8 100.56%), #d9d9d9;
      margin-right: 12px;
    }
    .place {
      color: var(--colors-text-text-secondary-700, #cecfd2);
    }
    .amount {
      flex: 1;
      text-align: right;
      color: var(--colors-text-text-primary-900, #f5f5f6);
    }
  }
`;

const Infos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl, 16px);
  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-md, 8px);
  border-radius: var(--radius-xl, 12px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs */
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
  .label {
    color: var(--colors-text-text-secondary-700, #cecfd2);

    /* Text md/Medium */

    font-weight: 500;
  }
  .value {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Display xs/Semibold */
    font-family: var(--Font-family-font-family-display, Outfit);
    font-size: var(--Font-size-display-xs, 24px);

    font-weight: 600;
    line-height: var(--Line-height-display-xs, 32px); /* 133.333% */
  }
`;
