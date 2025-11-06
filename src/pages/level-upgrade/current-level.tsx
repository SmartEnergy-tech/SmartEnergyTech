import styled from "styled-components";

import { Card, CardTitle, Divider, Label, Value } from ".";
import type { ILevel } from "./constants";
import { InfoTooltip } from "../../components/tooltip";
import { TooltipData } from "../dashboard/phase-2";
import { ProgressIndicator } from "../../components/progress-indicator";

interface Props {
  data: ILevel;
  level: number;
}

export const CurrentLevel = ({ data, level }: Props) => {
  const { title, unlockLimit, unlockingRate } = data;

  const unlocked = 250;

  return (
    <Container>
      <Card
        style={{
          borderRadius: "var(--radius-3xl, 20px) var(--radius-3xl, 20px) var(--radius-md, 8px) var(--radius-md, 8px)",
          gap: "var(--spacing-md, 8px)",
        }}
      >
        <TitleWithLabel>
          <Label>Your current level</Label>
          <CardTitle $gradient>{title}</CardTitle>
        </TitleWithLabel>
        <Divider />

        <UnlockLimitInfoContainer>
          <UnlockLimitInfo>
            <div className="label">
              Unlock Limit (Lvl 1)
              <InfoTooltip
                info={
                  <TooltipData>
                    <div>This is the maximum ENGC you can unlock at Level {level}.</div>
                    <div>To unlock more at a better rate, upgrade to Level {level + 1}.</div>
                  </TooltipData>
                }
              />
            </div>
            <div className="value">
              {unlocked}/{unlockLimit}
            </div>
          </UnlockLimitInfo>
          <ProgressContainer>
            <ProgressIndicator progress={(unlocked * 100) / unlockLimit} />
            {(unlocked * 100) / unlockLimit}%
          </ProgressContainer>
        </UnlockLimitInfoContainer>
      </Card>
      <CurrentStepInfos>
        <CurrentStepInfo>
          <Label>Unlock limit</Label>
          <Value>{unlockLimit.toLocaleString("en-US")} ENGC</Value>
        </CurrentStepInfo>
        <CurrentStepInfo>
          <Label>Unlocking Rate (Q)</Label>
          <Value>{unlockingRate.toLocaleString("en-US", { minimumFractionDigits: 4 })} ENGC / Sec</Value>
        </CurrentStepInfo>
      </CurrentStepInfos>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 4px);
`;

const TitleWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 4px);
`;

const UnlockLimitInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--spacing-xs, 4px);
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const UnlockLimitInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 4px);
  .label {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--colors-text-text-secondary-700, #cecfd2);

    /* Text md/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-md, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-md, 24px); /* 150% */
  }
  .value {
    /* Text lg/Semibold */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-lg, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
    background: var(--Gradient-Linear-Color-81, linear-gradient(45deg, #4b73ff 0%, #7cf7ff 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg, 12px);

  color: var(--colors-text-text-secondary-700, #cecfd2);

  /* Text sm/Medium */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

const CurrentStepInfos = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xs, 4px);
  align-items: center;
  > div:first-of-type {
    border-radius: var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-3xl, 20px);
  }

  > div:last-of-type {
    border-radius: var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-3xl, 20px) var(--radius-md, 8px);
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    > div:first-of-type {
      border-radius: var(--radius-md, 8px);
    }

    > div:last-of-type {
      border-radius: var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-3xl, 20px) var(--radius-3xl, 20px);
    }
  }
`;

const CurrentStepInfo = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-lg, 12px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);
`;
