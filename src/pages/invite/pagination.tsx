import styled, { css } from "styled-components";

import ArrowLeftIcon from "../../assets/arrow-left.svg?react";
import { useMemo } from "react";

interface Props {
  pages: number;
  page: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ page, pages, onPageChange }: Props) => {
  const pagesItems = useMemo(() => {
    // if total pages small — show all
    if (pages <= 6) {
      return Array.from({ length: pages }, (_, i) => i + 1);
    }

    const startPages = [1, 2, 3];
    const endPages = [pages - 2, pages - 1, pages];

    // If there’s a gap between last start page (3) and first end page (total-2)
    // insert ellipsis
    if (startPages[startPages.length - 1] + 1 < endPages[0]) {
      return [...startPages, "...", ...endPages];
    }

    // otherwise (close range), merge them
    const merged = Array.from({ length: pages }, (_, i) => i + 1);
    return merged;
  }, [page, pages]);

  const goToPage = (page: number) => onPageChange(page);
  const onNext = () => (page + 1 <= pages ? onPageChange(page + 1) : undefined);
  const onPrev = () => (page - 1 >= 0 ? onPageChange(page - 1) : undefined);

  return (
    <Container>
      <ActionBtn onClick={onPrev}>
        <ArrowLeftIcon />
        Previous
      </ActionBtn>
      <Pages>
        {pagesItems.map((el, index) => (
          <Page key={index} $current={el === page + 1} onClick={() => typeof el === "number" && goToPage(el - 1)}>
            {el}
          </Page>
        ))}
      </Pages>
      <ActionBtn $isNext onClick={onNext}>
        Next
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
`;

const ActionBtn = styled.div<{ $isNext?: boolean }>`
  width: fit-content;
  cursor: pointer;
  user-select: none;
  display: flex;
  padding: var(--spacing-md, 8px) var(--spacing-lg, 12px);
  align-items: center;
  gap: var(--spacing-xs, 4px);

  border-radius: var(--radius-2xl, 16px);
  border: 1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #333741);
  background: var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #161b26);

  /* Shadows/shadow-xs-skeuomorphic */
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
    0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
    0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));

  ${({ $isNext }) =>
    $isNext &&
    css`
      svg {
        rotate: 180deg;
      }
    `}
`;

const Pages = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xxs, 2px);
`;

const Page = styled.div<{ $current: boolean }>`
  cursor: pointer;
  user-select: none;
  display: flex;
  width: 40px;
  height: 40px;
  padding: var(--spacing-md, 8px);
  justify-content: center;
  align-items: center;
  ${({ $current }) =>
    $current &&
    css`
      border-radius: var(--radius-md, 8px);
      background: var(--Colors-Background-bg-primary_hover, #1f242f);
    `}
`;
