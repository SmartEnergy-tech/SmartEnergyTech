import styled from "styled-components";

import LogoWithTxt from "../assets/logo-with-txt.svg?react";
import { PrimaryButton, SecondaryButton } from "./button";

export const Header = () => {
  return (
    <Container>
      <LogoWithTxt />
      <Actions>
        <SecondaryButton>Log in</SecondaryButton>
        <PrimaryButton>Sign up</PrimaryButton>
      </Actions>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  padding: 0 var(--container-padding-desktop, 32px);
  justify-content: space-between;
  align-items: center;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg, 12px);
`;
