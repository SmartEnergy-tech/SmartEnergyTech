import styled from "styled-components";

import { InfoTooltip } from "../../components/tooltip";
import arrowToLevelImg from "../../assets/arrow-to-level.svg";
import { PrimaryButton } from "../../components/button";
import { ProgressIndicator } from "../../components/progress-indicator";

export const Phase2 = () => {
  return (
    <Container>
      <Header>
        <div>Phase 2 — Early Birds</div>
        <div>
          Level<span>1/6</span>
        </div>
      </Header>
      <Content>
        <Card>
          <UnlockValueWithLimit>
            <UnlockValue>0/500</UnlockValue>
            <Limit>
              Unlock Limit (Lvl 1)
              <InfoTooltip
                info={
                  <TooltipData>
                    <div>This is the maximum ENGC you can unlock at Level 1.</div>
                    <div>To unlock more at a better rate, upgrade to Level 2.</div>
                  </TooltipData>
                }
              />
            </Limit>
          </UnlockValueWithLimit>
          <ProgressContainer>
            <div className="title">Progress:</div>
            <ProgressIndicator progress={20} />
          </ProgressContainer>
          <Divider />
          <PowerNeeded>
            <div>Powering Needed:</div>
            <div>Use your PWBs to begin unlocking tokens.</div>
          </PowerNeeded>
        </Card>
        <Card>
          <div>
            <LevelToNextLevel>
              <div>Lvl 1</div>
              <img src={arrowToLevelImg} />
              <div>Lvl 2</div>
            </LevelToNextLevel>
            <Rate>x2 Rate / 1,000 ENGC Unlocked</Rate>
          </div>
          <Divider />
          <CostsToUpgrade>
            <div>Cost to Upgrade:</div>
            <div>250 ENG + Invite 1 Friend</div>
          </CostsToUpgrade>
          <PrimaryButton>Increase Unlocking Rate</PrimaryButton>
        </Card>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 4px);
`;

const Header = styled.div`
  padding: var(--spacing-3xl, 24px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  border-radius: var(--radius-3xl, 20px) var(--radius-3xl, 20px) var(--radius-md, 8px) var(--radius-md, 8px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  > div:first-of-type {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Text lg/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-lg, 18px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  }
  > div:last-of-type {
    display: flex;
    gap: var(--spacing-md, 8px);

    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Display xs/Regular */
    font-family: var(--Font-family-font-family-display, Outfit);
    font-size: var(--Font-size-display-xs, 24px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--Line-height-display-xs, 32px); /* 133.333% */
    > span {
      /* Display xs/Semibold */
      font-family: var(--Font-family-font-family-display, Outfit);
      font-size: var(--Font-size-display-xs, 24px);
      font-style: normal;
      font-weight: 600;
      line-height: var(--Line-height-display-xs, 32px); /* 133.333% */

      background: var(--Gradient-Linear-Color-81, linear-gradient(45deg, #4b73ff 0%, #7cf7ff 100%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xs, 4px);
  > div:first-of-type {
    border-radius: var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-3xl, 20px);
  }
  > div:last-of-type {
    border-radius: var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-3xl, 20px) var(--radius-md, 8px);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);
`;

const UnlockValueWithLimit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs, 4px);
`;

const UnlockValue = styled.div`
  /* Display xs/Semibold */
  font-family: var(--Font-family-font-family-display, Outfit);
  font-size: var(--Font-size-display-xs, 24px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-display-xs, 32px); /* 133.333% */

  background: var(--Gradient-Linear-Color-81, linear-gradient(45deg, #4b73ff 0%, #7cf7ff 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Limit = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 4px);
  color: var(--colors-text-text-primary-900, #f5f5f6);
  text-align: center;

  /* Text md/Bold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-md, 16px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-height-text-md, 24px); /* 150% */
`;

const TooltipData = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 4px);
  > div:first-of-type {
    color: var(--Colors-Text-text-white, #fff);

    /* Text xs/Semibold */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-xs, 12px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-text-xs, 18px); /* 150% */
  }
  > div:last-of-type {
    color: var(--Component-colors-Components-Tooltips-tooltip-supporting-text, #cecfd2);

    /* Text xs/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-xs, 12px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-xs, 18px); /* 150% */
  }
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  .title {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text md/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-md, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-md, 24px); /* 150% */
  }
`;

const Divider = styled.div`
  border-radius: var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-md, 8px) var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);
`;

const PowerNeeded = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 4px);
  > * {
    /* Text md/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-md, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-md, 24px); /* 150% */
  }
  > div:first-of-type {
    color: var(--colors-text-text-tertiary-600, #94969c);
  }

  > div:last-of-type {
    color: var(--colors-text-text-primary-900, #f5f5f6);
  }
`;

const LevelToNextLevel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 4px);
  margin-bottom: var(--spacing-xs, 4px);
  > div {
    /* Display xs/Semibold */
    font-family: var(--Font-family-font-family-display, Outfit);
    font-size: var(--Font-size-display-xs, 24px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-display-xs, 32px); /* 133.333% */

    background: var(--Gradient-Linear-Color-81, linear-gradient(45deg, #4b73ff 0%, #7cf7ff 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Rate = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text md/Bold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-md, 16px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-height-text-md, 24px); /* 150% */
`;

const CostsToUpgrade = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md, 8px);

  > * {
    /* Text md/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-md, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-md, 24px); /* 150% */
  }
  > div:first-of-type {
    color: var(--colors-text-text-tertiary-600, #94969c);
  }
  > div:last-of-type {
    color: var(--colors-text-text-primary-900, #f5f5f6);
  }
`;
