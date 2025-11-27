import styled from "styled-components";

import { Card, CardTitle, Divider, Label, LabelWithValue, Row, Value } from ".";
import type { ILevel } from "./constants";

import doneImg from "./done.svg";
import pendingImg from "./pending.svg";
import { PrimaryButton } from "../../components/button";

interface Props {
  data: ILevel;
  level: number;
}

export const NextLevel = ({ data, level }: Props) => {
  const { title, unlockLimit, unlockingRate, requiredToUpgrade, requiredToUpgradeAdditional } = data;

  const isPassed = true;

  return (
    <Card style={{ backgroundColor: "var(--Colors-Background-bg-secondary, #161b26)" }}>
      <TitleWithBtn>
        <CardTitle $gradient>{title}</CardTitle>
        <UpgradeButton>Upgrade to Lvl {level}</UpgradeButton>
      </TitleWithBtn>
      <Divider />
      <Row>
        <LabelWithValue>
          <Label>Unlock limit</Label>
          <Value>{unlockLimit.toLocaleString("en-US")} ENGC</Value>
        </LabelWithValue>
        <LabelWithValue>
          <Label>Unlocking Rate (Q)</Label>
          <Value>{unlockingRate.toLocaleString("en-US", { minimumFractionDigits: 4 })} ENGC / Sec</Value>
        </LabelWithValue>
      </Row>
      <Divider />
      <Row>
        <LabelWithValue>
          <Label>Required to upgrade</Label>
          <Value>
            <img src={isPassed ? doneImg : pendingImg} />
            {requiredToUpgrade.toLocaleString("en-US")} ENGC
          </Value>
        </LabelWithValue>
        <LabelWithValue>
          <Value style={{ marginTop: "auto" }}>
            <img src={isPassed ? doneImg : pendingImg} />

            {requiredToUpgradeAdditional}
          </Value>
        </LabelWithValue>
      </Row>
    </Card>
  );
};

const TitleWithBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-xl, 16px);
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const UpgradeButton = styled(PrimaryButton)`
  display: flex;
  padding: 10px var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm, 6px);
  border-radius: var(--radius-2xl, 16px);

  font-weight: 600;

  &:disabled {
    color: var(--Colors-Foreground-fg-disabled, #85888e);

    border: 1px solid var(--Colors-Border-border-disabled_subtle, #1f242f);
    background: var(--Colors-Background-bg-disabled, #1f242f);
    box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;
