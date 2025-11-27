import type { JSX } from "react";
import styled from "styled-components";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  endAdornment?: JSX.Element;
  startAdornment?: JSX.Element;
}

export const Field = ({
  label,
  value,
  onChange,
  placeholder,
  endAdornment,
  startAdornment,
  type = "text",
  ...props
}: Props) => {
  return (
    <Container>
      {Boolean(label) && <Label>{label}</Label>}
      <InputWithAdornment>
        {startAdornment}
        <Input
          type={type}
          value={value}
          onChange={({ target: { value } }) => onChange(value)}
          placeholder={placeholder}
          style={{
            ...(endAdornment && {
              borderRadius: "8px 0px 0px 8px",
              borderRight: "none",
            }),
            ...(startAdornment && {
              borderRadius: "0px 8px 8px 0px",
              borderLeft: "none",
            }),
          }}
          {...props}
        />
        {endAdornment}
      </InputWithAdornment>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm, 6px);
`;

const Label = styled.div`
  color: var(--colors-text-text-secondary-700, #cecfd2);

  /* Text sm/Medium */

  font-size: var(--Font-size-text-sm, 14px);

  font-weight: 500;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

const Input = styled.input`
  display: flex;
  padding: 10px 14px;
  align-items: center;
  gap: var(--spacing-md, 8px);
  align-self: stretch;
  border-radius: var(--radius-md, 8px);
  border: 1px solid var(--Colors-Border-border-primary, #333741);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs */
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));

  color: white;
  &::placeholder {
    color: var(--Colors-Text-text-placeholder, #85888e);
  }
`;

const InputWithAdornment = styled.div`
  display: flex;
  > input {
    width: 100%;
  }
`;
