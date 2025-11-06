import doneImg from "./done.svg";

import { Card, CardTitle, Divider, Label, LabelWithValue, Row, Value } from ".";
import type { ILevel } from "./constants";

interface Props {
  data: ILevel;
}

export const PassedLevel = ({ data }: Props) => {
  const { title, unlockLimit, unlockingRate, requiredToUpgrade, requiredToUpgradeAdditional } = data;
  return (
    <Card>
      <CardTitle style={{ color: "var(--colors-text-text-success-primary-600, #47CD89)" }}>{title}</CardTitle>
      <Divider />
      <Row>
        <LabelWithValue>
          <Label>Unlock limit</Label>
          <Value style={{ color: "var(--colors-text-text-tertiary-600, #94969C)" }}>
            {unlockLimit.toLocaleString("en-US")} ENGC
          </Value>
        </LabelWithValue>
        <LabelWithValue>
          <Label>Unlocking Rate (Q)</Label>
          <Value style={{ color: "var(--colors-text-text-tertiary-600, #94969C)" }}>
            {unlockingRate.toLocaleString("en-US", { minimumFractionDigits: 4 })} ENGC / Sec
          </Value>
        </LabelWithValue>
      </Row>
      <Divider />
      <Row>
        <LabelWithValue>
          <Label>Required to upgrade</Label>
          <Value style={{ color: "var(--colors-text-text-tertiary-600, #94969C)" }}>
            <img src={doneImg} />
            {requiredToUpgrade.toLocaleString("en-US")} ENGC
          </Value>
        </LabelWithValue>
        <LabelWithValue>
          <Value style={{ marginTop: "auto", color: "var(--colors-text-text-tertiary-600, #94969C)" }}>
            <img src={doneImg} />
            {requiredToUpgradeAdditional}
          </Value>
        </LabelWithValue>
      </Row>
    </Card>
  );
};
