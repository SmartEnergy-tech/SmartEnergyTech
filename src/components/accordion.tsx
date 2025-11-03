import React, { useState } from "react";
import styled, { css } from "styled-components";

import DropdownIcon from "../assets/dropdown.svg?react";

interface Props {
  title: string | React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export const Accordion = ({ title, children, defaultExpanded = false }: Props) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggle = () => setExpanded((v) => !v);

  return (
    <Container onClick={toggle}>
      <Header $expanded={expanded} aria-expanded={expanded}>
        <Title>{title}</Title>
        <StyledDropdownIcon $expanded={expanded} />
      </Header>
      <Content $expanded={expanded}>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  padding: var(--spacing-xl, 16px) var(--spacing-3xl, 24px);
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const StyledDropdownIcon = styled(DropdownIcon)<{ $expanded: boolean }>`
  path {
    stroke: #00f1e8;
  }
  rotate: 0deg;
  transition: all 0.35s ease-in-out;
  ${({ $expanded }) =>
    $expanded &&
    css`
      rotate: 180deg;
    `}
`;

const Header = styled.div<{ $expanded: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  color: var(--Colors-Text-text-disabled, #85888e);

  /* Text lg/Medium */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-lg, 18px);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  > span {
    color: var(--Colors-Text-text-disabled, #85888e);

    /* Text lg/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-lg, 18px);
    font-style: normal;
    font-weight: 700;
    line-height: var(--Line-height-text-lg, 28px);
  }
`;

const Content = styled.div<{ $expanded: boolean }>`
  max-height: 0px;
  ${({ $expanded }) =>
    $expanded &&
    css`
      max-height: 200px;
      margin-top: var(--spacing-xl, 16px);
    `}
  overflow: hidden;
  transition: all 0.35s ease-in-out;
`;
