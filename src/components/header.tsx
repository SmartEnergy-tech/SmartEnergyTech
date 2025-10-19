import styled from "styled-components";

import LogoWithTxt from "../assets/logo-with-txt.svg?react";

export const Header = () => {
  return (
    <Container>
      <LogoWithTxt />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  max-width: var(--container-max-width-desktop, 1280px);
  padding: 0 var(--container-padding-desktop, 32px);
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
