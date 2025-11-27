import { useState } from "react";
import styled, { css } from "styled-components";

import dropdownIcon from "../../assets/dropdown.svg";

export const LanguageSelect = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <Container $open={open}>
      <Button onClick={toggle}>
        <Label>ENG</Label>
        <Icon open={open}>
          <img src={dropdownIcon} />
        </Icon>
      </Button>
      {open && (
        <Dropdown>
          <Option onClick={toggle}>
            <div>English</div>
            <div>Selected</div>
          </Option>
          <Option onClick={toggle}>
            <div>French</div>
            <div>Coming Soon</div>
          </Option>
        </Dropdown>
      )}
    </Container>
  );
};

const Container = styled.div<{ $open: boolean }>`
  position: relative;
  cursor: pointer;
  user-select: none;
  display: flex;
  padding: var(--spacing-md, 8px) var(--spacing-lg, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs, 4px);
  border-radius: var(--radius-2xl, 16px);
  border: 1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #333741);
  background: var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #161b26);

  /* Shadows/shadow-xs-skeuomorphic */
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
    0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
    0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));

  ${({ $open }) =>
    $open &&
    css`
      border-radius: var(--radius-2xl, 16px);
      border: 1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #333741);
      background: var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #161b26);

      /* Focus rings/focus-ring-shadow-xs-skeuomorphic */
      box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
        0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
        0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0)),
        0 0 0 2px var(--Colors-Background-bg-primary, #0c111d),
        0 0 0 4px var(--Colors-Effects-Focus-rings-focus-ring, #00f1e8);
    `}
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-xs, 4px);
`;

const Label = styled.div`
  color: var(--Component-colors-Components-Buttons-Secondary-button-secondary-fg, #cecfd2);

  /* Text sm/Semibold */

  font-size: var(--Font-size-text-sm, 14px);

  font-weight: 600;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

const Icon = styled.div<{ open: boolean }>`
  display: flex;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  right: 0px;
  z-index: 10;
  width: 204px;
  padding: var(--spacing-xs, 4px) 0;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-md, 8px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-lg */
  box-shadow: 0 12px 16px -4px var(--Colors-Effects-Shadows-shadow-lg_01, rgba(255, 255, 255, 0)),
    0 4px 6px -2px var(--Colors-Effects-Shadows-shadow-lg_02, rgba(255, 255, 255, 0));
`;

const Option = styled.div`
  padding: 9px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-sm, 6px);
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  > div:first-of-type {
    color: var(--colors-text-text-secondary-700, #cecfd2);

    /* Text sm/Medium */

    font-size: var(--Font-size-text-sm, 14px);

    font-weight: 500;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }
  > div:last-of-type {
    color: var(--colors-text-text-quaternary-500, #94969c);

    /* Text xs/Regular */

    font-size: var(--Font-size-text-xs, 12px);

    line-height: var(--Line-height-text-xs, 18px); /* 150% */
  }
`;
