import pendingImg from "./pending.svg";

import { Card, CardTitle, Divider, Label, LabelWithValue, Row, Value } from ".";
import type { ILevel } from "./constants";

interface Props {
  data: ILevel;
  level?: number;
}

export const CommonLevel = ({ data }: Props) => {
  const { title, unlockLimit, unlockingRate, requiredToUpgrade, requiredToUpgradeAdditional } = data;
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <Divider />
      <Row>
        <LabelWithValue>
          <Label>Unlock limit</Label>
          <Value>{unlockLimit.toLocaleString("en-US")} ENGC</Value>
        </LabelWithValue>
        <LabelWithValue>
          <Label>Unlocking Rate (Q)</Label>
          <Value>{unlockingRate.toLocaleString("en-US")} ENGC / Sec</Value>
        </LabelWithValue>
      </Row>
      <Divider />
      <Row>
        <LabelWithValue>
          <Label>Required to upgrade</Label>
          <Value>
            <img src={pendingImg} />
            {requiredToUpgrade.toLocaleString("en-US", { minimumFractionDigits: 4 })} ENGC
          </Value>
        </LabelWithValue>
        <LabelWithValue>
          <Value style={{ marginTop: "auto" }}>
            <img src={pendingImg} />
            {requiredToUpgradeAdditional}
          </Value>
        </LabelWithValue>
      </Row>
    </Card>
  );
};
