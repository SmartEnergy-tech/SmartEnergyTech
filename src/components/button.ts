import styled, { css } from "styled-components";

export const ButtonBase = styled.button`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-2xl, 16px);
  font-weight: 600;
  outline: none;
  cursor: pointer;
  border: 2px solid transparent;
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
  color: #fff;
  &:disabled {
    opacity: 0.8;
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  color: var(--tertiary-600, #94969c);
  background: transparent;
`;
