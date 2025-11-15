import styled, { css } from "styled-components";

export const ButtonBase = styled.button`
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-2xl, 16px);
  font-weight: 600;
  outline: none;
  cursor: pointer;
  border: 2px solid transparent;
  /* Text sm/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

export const PrimaryButton = styled(ButtonBase)<{ $boxShadow?: boolean }>`
  border-color: rgba(255, 255, 255, 0.12);
  background: var(--primary, #00c1ba);
  ${({ $boxShadow = true }) =>
    $boxShadow &&
    css`
      box-shadow: 0 0 0 1px rgba(12, 17, 29, 0.18) inset, 0 -2px 0 0 rgba(81, 81, 82, 0.05) inset,
        0 1px 2px 0 rgba(255, 255, 255, 0) inset;
    `}
  color: var(--Component-colors-Components-Buttons-Primary-button-primary-fg, #FFF);
  &:disabled {
    cursor: default;
    border-radius: var(--radius-2xl, 16px);
    border: 1px solid var(--Colors-Border-border-disabled_subtle, #1f242f);
    background: var(--Colors-Background-bg-disabled, #1f242f);

    /* Shadows/shadow-xs */
    box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
    color: var(--Colors-Foreground-fg-disabled, #85888e);
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  border-radius: var(--radius-2xl, 16px);
  border: 1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #333741);
  background: var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #161b26);

  /* Shadows/shadow-xs-skeuomorphic */
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
    0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
    0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
`;
