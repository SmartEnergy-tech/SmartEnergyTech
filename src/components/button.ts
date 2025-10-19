import styled from "styled-components";

export const ButtonBase = styled.button`
  padding: 8px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-2xl, 16px);
  font-weight: 600;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  /* transition: all 0.2s ease-in-out;
  scale: 1;
  &:hover {
    scale: 1.02;
  } */
`;

export const PrimaryButton = styled(ButtonBase)`
  border-color: rgba(255, 255, 255, 0.12);
  background: var(--primary, #00c1ba);

  box-shadow: 0 0 0 1px rgba(12, 17, 29, 0.18) inset, 0 -2px 0 0 rgba(12, 17, 29, 0.05) inset,
    0 1px 2px 0 rgba(255, 255, 255, 0);

  color: #fff;
`;

export const SecondaryButton = styled(ButtonBase)`
  color: var(--tertiary, #94969c);
  background: transparent;
`;
