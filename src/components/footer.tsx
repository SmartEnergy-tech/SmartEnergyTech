import styled from "styled-components";

import twitterImg from "../assets/socials/twitter.svg";
import facebookImg from "../assets/socials/facebook.svg";
import linkedinImg from "../assets/socials/linkedin-2.svg";
import githubImg from "../assets/socials/github.svg";
import fingersImg from "../assets/socials/fingers.svg";
import basketballImg from "../assets/socials/basketball.svg";
import figmaImg from "../assets/socials/figma.svg";
import logoImg from "../assets/logo.svg";

export const Footer = () => (
  <Container>
    <Socials>
      <img src={twitterImg} alt="twitter" />
      <img src={linkedinImg} alt="linkedIn" />
      <img src={facebookImg} alt="facebook" />
      <img src={githubImg} alt="github" />
      <img src={fingersImg} alt="fingers" />
      <img src={basketballImg} alt="basketball" />
      <img src={figmaImg} alt="figma" />
    </Socials>
    <img src={logoImg} alt="logoImg" />
    <AllRights>© 2025 ENG-C. All rights reserved.</AllRights>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: var(--spacing-6xl, 48px) 32px;
  @media (max-width: 769px) {
    flex-direction: column;
    padding: var(--spacing-6xl, 48px) 0px;
    gap: 32px;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3xl, 24px);
`;

const AllRights = styled.div`
  max-width: 320px;
  color: var(--colors-text-text-quaternary-500, #94969c);
  text-align: right;

  @media (max-width: 769px) {
    max-width: 100%;
  }
`;
