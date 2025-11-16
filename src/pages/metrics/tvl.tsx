import styled from "styled-components";
import { Area, AreaChart } from "recharts";

import ArrowIcon from "../../assets/arrow-left.svg?react";

// #region Sample data
export const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

import { StyledCard } from ".";
import { Header } from "./header";
import { InfoCard } from "./info-card";

export const TVL = () => {
  return (
    <StyledCard>
      <Header type="tvl" title="TVL Overview" info="Funds committed to building the first eco-factory" />
      <Content>
        <div className="title">TVL</div>
        <ChartContainer>
          <ChartContainerInfo>
            <div className="value">CHF 82,400</div>
            <div className="info">
              <span>
                <ArrowIcon />
                26%
              </span>
              vs last month
            </div>
          </ChartContainerInfo>
          <AreaChart
            className="area-chart"
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
      </Content>
      <InfoCards>
        <InfoCard title="Unique Purchases" value="198" />
        <InfoCard title="Returning Buyers" value="46%" />
      </InfoCards>
    </StyledCard>
  );
};

const Content = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-3xl, 24px);
  border-radius: var(--radius-xl, 12px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs */
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
  * {
    transition: none;
  }
  .title {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Text md/Semibold */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-md, 16px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-text-md, 24px); /* 150% */
  }
  @media (max-width: 769px) {
    padding: var(--spacing-2xl, 20px) var(--spacing-xl, 16px);
  }
`;

const InfoCards = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const ChartContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: var(--spacing-xl, 16px);
  .area-chart {
    width: 112px;
    height: 56px;
    @media (max-width: 769px) {
      width: 96px;
      height: 48px;
    }
  }
`;

const ChartContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  flex: 1 0 0;
  .value {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Display md/Semibold */
    font-family: var(--Font-family-font-family-display, Outfit);
    font-size: var(--Font-size-display-md, 36px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-display-md, 44px); /* 122.222% */
    letter-spacing: -0.72px;
    @media (max-width: 769px) {
      font-size: var(--Font-size-display-sm, 30px);
      line-height: var(--Line-height-display-sm, 38px); /* 126.667% */
    }
  }
  .info {
    display: flex;
    align-items: center;
    overflow: hidden;
    color: var(--colors-text-text-tertiary-600, #94969c);
    text-overflow: ellipsis;

    /* Text sm/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-sm, 14px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
    span {
      display: flex;
      align-items: center;
      margin-right: var(--spacing-md, 8px);
      /* Text sm/Medium */
      font-family: var(--Font-family-font-family-body, Inter);
      font-size: var(--Font-size-text-sm, 14px);
      font-style: normal;
      font-weight: 500;
      line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
      color: var(--colors-text-text-success-primary-600, #47cd89);
      svg {
        margin-right: 4px;
        rotate: 90deg;
        path {
          stroke: var(--Colors-Foreground-fg-success-secondary, #47cd89);
        }
      }
    }
  }
`;
