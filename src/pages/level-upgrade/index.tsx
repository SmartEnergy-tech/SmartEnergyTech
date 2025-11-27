import styled, { css } from "styled-components";

import { levelsData } from "./constants";
import { CurrentLevel } from "./current-level";
import { NextLevel } from "./next-level";
import { CommonLevel } from "./common-level";
import { PassedLevel } from "./passed-level";

export const LevelUpgradePage = () => {
  const currentLevel = 3;

  return (
    <Container>
      <Title>Increase Unlocking Rate</Title>
      <Cards>
        {levelsData.map((data, index) => {
          const isCurrent = index + 1 === currentLevel;
          const isNext = index + 1 === currentLevel + 1;
          const isPassed = index + 1 < currentLevel;

          if (isPassed) {
            return <PassedLevel key={index} data={data} />;
          }

          if (isCurrent) {
            return <CurrentLevel key={index} data={data} level={index + 1} />;
          }
          if (isNext) {
            return <NextLevel key={index} data={data} level={index + 1} />;
          }

          return <CommonLevel key={index} data={data} />;
        })}
      </Cards>
    </Container>
  );
};

export const Container = styled.div`
  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-3xl, 24px);
  gap: var(--spacing-xl, 16px);
  @media (max-width: 769px) {
    padding: var(--spacing-2xl, 20px);
  }
`;

export const TitleWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 4px);
`;

export const Title = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text xl/Semibold */

  font-size: var(--Font-size-text-xl, 20px);

  font-weight: 600;
  line-height: var(--Line-height-text-xl, 30px); /* 150% */
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl, 16px);
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div<{ $isNext?: boolean; $isCurrent?: boolean }>`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-2xl, 20px);
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
  ${({ $isNext }) =>
    $isNext &&
    css`
      background: var(--Colors-Background-bg-secondary, #161b26);
    `}
  ${({ $isCurrent }) =>
    $isCurrent &&
    css`
      gap: var(--spacing-lg, 12px);
    `}
`;

export const CardTitle = styled.div<{ $gradient?: boolean; $isPassed?: boolean }>`
  color: var(--colors-text-text-secondary-700, #cecfd2);

  /* Display xs/Semibold */
  font-family: var(--Font-family-font-family-display, Outfit);
  font-size: var(--Font-size-display-xs, 24px);

  font-weight: 600;
  line-height: var(--Line-height-display-xs, 32px); /* 133.333% */
  ${({ $gradient }) =>
    $gradient &&
    css`
      background: var(--Gradient-Linear-Color-81, linear-gradient(45deg, #4b73ff 0%, #7cf7ff 100%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}

  ${({ $isPassed }) =>
    $isPassed &&
    css`
      color: color: var(--colors-text-text-success-primary-600, #47CD89);
    `}
`;

export const Label = styled.div`
  color: var(--colors-text-text-tertiary-600, #94969c);

  /* Text md/Medium */

  font-weight: 500;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--Colors-Border-border-secondary, #1f242f);
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md, 8px);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const LabelWithValue = styled.div`
  display: flex;
  flex-direction: column;

  gap: var(--spacing-md, 8px);
`;

export const Value = styled.div<{ $isPassed?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-md, 8px);
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text md/Medium */

  font-weight: 500;

  ${({ $isPassed }) =>
    $isPassed &&
    css`
      color: var(--colors-text-text-tertiary-600, #94969c);
    `}
`;
