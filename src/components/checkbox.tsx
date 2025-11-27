import styled from "styled-components";

import CheckIcon from "../assets/check.svg?react";

interface Props {
  label?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox = ({ checked, onChange, label }: Props) => (
  <Container onClick={() => onChange(!checked)}>
    <CheckboxContainer>{checked && <CheckIcon />}</CheckboxContainer>
    {Boolean(label) && <Label>{label}</Label>}
  </Container>
);

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--spacing-xs, 4px);
  border: 1px solid var(--Colors-Border-border-primary, #333741);
  > svg {
    scale: 0.8;
  }
`;

const Label = styled.div`
  color: var(--colors-text-text-secondary-700, #cecfd2);

  /* Text sm/Medium */

  font-size: var(--Font-size-text-sm, 14px);

  font-weight: 500;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;
