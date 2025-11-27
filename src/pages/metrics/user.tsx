import styled from "styled-components";
import { Area, AreaChart } from "recharts";

import { StyledCard } from ".";
import { Header } from "./header";
import { data } from "./tvl";
import GrowIcon from "../../assets/grow.svg?react";
import { InfoCard } from "./info-card";

export const User = () => {
  return (
    <StyledCard>
      <Header type="user" title="User Growth" info="Active users, verifications, and first-time investors" />
      <ChartContainer>
        <Info>
          <div className="title">Daily Active Users</div>
          <div className="value">
            1,245
            <div className="info">
              <span>
                <GrowIcon />
                2%
              </span>
              vs last month
            </div>
          </div>
        </Info>
        <AreaChart
          style={{ width: "100%", height: "72px" }}
          responsive
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#47CD89" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#47CD89" stopOpacity="0" />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="var(--Colors-Foreground-fg-success-secondary, #47CD89)"
            fill="url(#areaGradient)"
          />
        </AreaChart>
      </ChartContainer>
      <InfoCards>
        <InfoCard title="New Investors" value="324" />
        <InfoCard title="Invites Sent" value="420" />
        <InfoCard title="Converted" value="132" />
        <InfoCard title="Conversion" value="31%" />
      </InfoCards>
    </StyledCard>
  );
};

const ChartContainer = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-2xl, 20px);
  border-radius: var(--radius-xl, 12px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs */
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
  * {
    transition: none;
  }
  @media (max-width: 769px) {
    padding: var(--spacing-2xl, 20px) var(--spacing-xl, 16px);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md, 8px);
  .title {
    color: var(--colors-text-text-secondary-700, #cecfd2);

    /* Text md/Medium */

    font-weight: 500;
  }
  .value {
    display: flex;
    justify-content: space-between;
    align-items: center;
    row-gap: 12px;
    flex-wrap: wrap;

    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Display md/Semibold */
    font-family: var(--Font-family-font-family-display, Outfit);
    font-size: var(--Font-size-display-md, 36px);
    font-weight: 600;
    line-height: var(--Line-height-display-md, 44px); /* 122.222% */
    letter-spacing: -0.72px;
    @media (max-width: 769px) {
      font-size: var(--Font-size-display-sm, 30px);
      font-weight: 600;
      line-height: var(--Line-height-display-sm, 38px); /* 126.667% */
    }
    .info {
      display: flex;
      align-items: center;
      overflow: hidden;
      color: var(--colors-text-text-tertiary-600, #94969c);
      text-overflow: ellipsis;

      /* Text sm/Medium */

      font-size: var(--Font-size-text-sm, 14px);

      font-weight: 500;
      line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
      span {
        display: flex;
        align-items: center;
        margin-right: var(--spacing-md, 8px);
        /* Text sm/Medium */

        font-size: var(--Font-size-text-sm, 14px);

        font-weight: 500;
        line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
        color: var(--colors-text-text-success-primary-600, #47cd89);
        svg {
          margin-right: 4px;
        }
      }
    }
  }
`;

const InfoCards = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  > * {
    min-width: 30%;
  }
  > div:first-of-type {
    min-width: 100% !important;
  }
  > div:nth-of-type(2) {
    white-space: nowrap;
  }
  @media (max-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
