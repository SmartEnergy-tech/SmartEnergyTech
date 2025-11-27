import { useEffect, type PropsWithChildren } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useUnit } from "effector-react";

import loginImg from "../assets/login-img.png";
import LogoWithTxtImg from "../assets/logo-with-txt.svg?react";
import { $isAuthenticated } from "../store";

export const LoginLayout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  const isAuthenticated = useUnit($isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <LoginFormContainer>
        <LoginForm>
          <StyledLogo onClick={goHome} />
          {children}
        </LoginForm>
        <Footer>© ENG-C 2025</Footer>
      </LoginFormContainer>
      <ImgContainer>
        <img src={loginImg} alt="loginImg" height="682px" />
      </ImgContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(400px, 640px) 1fr;
  height: 100%;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const StyledLogo = styled(LogoWithTxtImg)`
  margin-bottom: var(--spacing-8xl, 80px);
  cursor: pointer;
  @media (max-width: 1200px) {
    margin-bottom: var(--spacing-3xl, 24px);
  }
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #101323;
  @media (max-width: 1200px) {
    padding: 48px 16px;
  }
`;

const LoginForm = styled.div`
  display: flex;
  /* padding: 0 var(--container-padding-desktop, 32px); */
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  max-width: 360px;
  width: 100%;
  margin: auto;
`;

const Footer = styled.div`
  display: flex;
  height: 96px;
  padding: var(--spacing-4xl, 32px) var(--container-padding-desktop, 32px);
  align-items: flex-end;
  align-self: stretch;
  color: var(--colors-text-text-tertiary-600, #94969c);

  /* Text sm/Regular */

  font-size: var(--Font-size-text-sm, 14px);

  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  @media (max-width: 1200px) {
    display: none;
  }
`;

const ImgContainer = styled.div`
  background: var(--Colors-Background-bg-tertiary, #1f242f);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 0px 16px 16px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
