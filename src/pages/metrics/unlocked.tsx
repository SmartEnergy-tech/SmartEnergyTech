import styled from "styled-components";

import { StyledCard } from ".";
import { Header } from "./header";
import { InfoCard } from "./info-card";
import ArrowIcon from "../../assets/arrow-left.svg?react";

export const Unlocked = () => {
  return (
    <StyledCard>
      <Header type="unlocked" title="ENGC Unlock Progress" info="ENGC unlocked vs frozen — key to real-world value." />
      <StyledInfoCard
        title="ENGC Unlocked"
        value="60.5%"
        valueBadge={
          <ValueBadge>
            <ArrowIcon />
            15%
          </ValueBadge>
        }
      />
      <InfoCards>
        <InfoCard title="ENGC Frozen" value="12B" />
        <InfoCard title="ENGC in Circuit" value="900,780" />
      </InfoCards>
    </StyledCard>
  );
};

const StyledInfoCard = styled(InfoCard)`
  .value {
    font-size: var(--Font-size-display-md, 36px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-display-md, 44px); /* 122.222% */
    letter-spacing: -0.72px;
  }
`;

const ValueBadge = styled.div`
  display: flex;
  padding: var(--spacing-xs, 4px) 10px var(--spacing-xs, 4px) var(--spacing-md, 8px);
  align-items: center;
  gap: var(--spacing-xs, 4px);
  border-radius: var(--radius-md, 8px);
  border: 1px solid var(--Colors-Border-border-primary, #333741);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs */
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));

  color: var(--colors-text-text-secondary-700, #cecfd2);
  text-align: center;

  /* Text sm/Medium */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  svg {
    width: 12px;
    height: 12px;
    rotate: 90deg;
    path {
      stroke: var(--Colors-Foreground-fg-success-secondary, #47cd89);
    }
  }
`;

const InfoCards = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;
