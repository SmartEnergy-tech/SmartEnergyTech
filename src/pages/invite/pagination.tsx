import styled, { css } from "styled-components";
import { useMemo } from "react";

import ArrowLeftIcon from "../../assets/arrow-left.svg?react";

interface Props {
  pages: number;
  page: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ page, pages, onPageChange }: Props) => {
  const pagesItems = useMemo<(number | string)[]>(() => {
    const total = pages; // total page count (displayed 1..total)
    const current = page + 1; // 0-based -> 1-based

    // Few pages: show all
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    // --- groups ---
    // start: shrink when very near the start to keep the "1 … 3,4,5" shape
    const start = current > 3 ? [1] : [1, 2, 3];

    // center: always 3 around the current, but clamp to valid range
    let center = [current - 1, current, current + 1];

    // near the very beginning -> force [3,4,5]
    if (current <= 3) center = [3, 4, 5];

    // near the very end -> pull the trio before the last 3
    if (current >= total - 2) center = [total - 4, total - 3, total - 2];

    // end: always last 3
    const end = [total - 2, total - 1, total];

    // merge, clamp, dedupe, sort
    const seq = [...start, ...center, ...end]
      .filter((n) => n >= 1 && n <= total)
      .filter((n, i, arr) => arr.indexOf(n) === i)
      .sort((a, b) => a - b);

    // insert "..." where there is a gap > 1
    const out: (number | string)[] = [];
    for (let i = 0; i < seq.length; i++) {
      if (i > 0 && seq[i] - seq[i - 1] > 1) out.push("...");
      out.push(seq[i]);
    }
    return out;
  }, [page, pages]);

  const goToPage = (page: number) => onPageChange(page);
  const onNext = () => (page + 1 <= pages ? onPageChange(page + 1) : undefined);
  const onPrev = () => (page - 1 >= 0 ? onPageChange(page - 1) : undefined);

  return (
    <Container>
      <ActionBtn onClick={onPrev} $disabled={!page}>
        <ArrowLeftIcon />
        <div className="label">Previous</div>
      </ActionBtn>
      <MobilePages>
        Page <span>{page + 1}</span> of <span>{pages}</span>
      </MobilePages>
      <Pages>
        {pagesItems.map((el, index) => (
          <Page
            key={index}
            $current={el === page + 1}
            onClick={() => typeof el === "number" && goToPage(el - 1)}
            style={{ cursor: typeof el === "number" ? "pointer" : "default" }}
          >
            {el}
          </Page>
        ))}
      </Pages>
      <ActionBtn $isNext onClick={onNext} $disabled={page + 1 === pages}>
        <div className="label">Next</div>
        <ArrowLeftIcon />
      </ActionBtn>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 144px 1fr 144px;
  padding: var(--spacing-lg, 12px) var(--spacing-3xl, 24px) var(--spacing-xl, 16px) var(--spacing-3xl, 24px);
  align-items: center;
  gap: var(--spacing-lg, 12px);
  @media (max-width: 1520px) {
    grid-template-columns: 36px 1fr 36px;
  }
`;

const ActionBtn = styled.div<{ $isNext?: boolean; $disabled: boolean }>`
  width: fit-content;
  cursor: pointer;
  user-select: none;
  display: flex;
  padding: var(--spacing-md, 8px) var(--spacing-lg, 12px);
  align-items: center;
  gap: var(--spacing-md, 8px);

  border-radius: var(--radius-2xl, 16px);
  border: 1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #333741);
  background: var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #161b26);

  /* Shadows/shadow-xs-skeuomorphic */
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
    0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
    0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));

  path {
    stroke: var(--Component-colors-Components-Buttons-Secondary-button-secondary-fg, #cecfd2);
  }
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: default;
    `}
  ${({ $isNext }) =>
    $isNext &&
    css`
      justify-self: flex-end;
      svg {
        rotate: 180deg;
        stroke: var(--Component-colors-Components-Buttons-Secondary-button-secondary-fg, #cecfd2);
      }
    `}
    .label {
    color: var(--Component-colors-Components-Buttons-Secondary-button-secondary-fg, #cecfd2);

    /* Text sm/Semibold */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-sm, 14px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }
  @media (max-width: 769px) {
    padding: var(--spacing-md, 8px);
    .label {
      display: none;
    }
  }
`;

const Pages = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xxs, 2px);
  justify-self: center;
  @media (max-width: 1520px) {
    display: none;
  }
`;

const MobilePages = styled.div`
  @media (min-width: 1520px) {
    display: none;
  }
  text-align: center;
  color: var(--colors-foreground-fg-secondary-700, #cecfd2);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  span {
    font-weight: 500;
  }
`;

const Page = styled.div<{ $current: boolean }>`
  user-select: none;
  display: flex;
  width: 40px;
  height: 40px;
  padding: var(--spacing-md, 8px);
  justify-content: center;
  align-items: center;

  color: var(--colors-text-text-tertiary-600, #94969c);
  text-align: center;

  /* Text sm/Medium */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */

  ${({ $current }) =>
    $current &&
    css`
      color: var(--Colors-Text-text-secondary_hover, #ececed);
      border-radius: var(--radius-md, 8px);
      background: var(--Colors-Background-bg-primary_hover, #1f242f);
    `}
`;
