import { useMemo, useState, type ReactNode } from "react";
import styled, { css } from "styled-components";

import dropdownIcon from "../../assets/dropdown.svg";

interface Props {
  options: { label: string | ReactNode; value: string }[];
  selected: string;
  onChange: (value: string) => void;
}

export const Dropdown = ({ options, selected, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  const selectedOpt = useMemo(() => options.find((el) => el.value === selected), [selected, options]);

  const toggle = () => setOpen(!open);

  const onSelect = (value: string) => {
    onChange(value);
    toggle();
  };

  return (
    <Container $open={open}>
      <Button onClick={toggle}>
        <Label>{selectedOpt?.label || "-"}</Label>
        <Icon open={open}>
          <img src={dropdownIcon} />
        </Icon>
      </Button>
      {open && (
        <DropdownMenu>
          {options.map(({ label, value }) => (
            <Option onClick={() => onSelect(value)} key={value}>
              <div>{label}</div>
              <div>{selected === value ? "Selected" : ""}</div>
            </Option>
          ))}
        </DropdownMenu>
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
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

const Icon = styled.div<{ open: boolean }>`
  display: flex;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease;
`;

const DropdownMenu = styled.div`
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
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-sm, 14px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }
  > div:last-of-type {
    color: var(--colors-text-text-quaternary-500, #94969c);

    /* Text xs/Regular */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-xs, 12px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--Line-height-text-xs, 18px); /* 150% */
  }
`;
