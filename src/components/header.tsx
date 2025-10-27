import styled from "styled-components";

import LogoWithTxt from "../assets/logo-with-txt.svg?react";
import Logo from "../assets/logo.svg?react";
import { PrimaryButton, SecondaryButton } from "./button";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoWithTxt className="logo-with-txt" />
      <Logo className="logo" />
      <Actions>
        <SecondaryButton onClick={() => navigate("/log-in")}>Log in</SecondaryButton>
        <PrimaryButton onClick={() => navigate("/sign-up")}>Sign up</PrimaryButton>
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
  justify-content: space-between;
  align-items: center;
  .logo {
    display: none;
  }
  @media (max-width: 769px) {
    padding: 0px 16px;
    .logo {
      display: block;
    }
    .logo-with-txt {
      display: none;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg, 12px);
`;
