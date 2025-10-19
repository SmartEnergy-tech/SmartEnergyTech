import styled from "styled-components";
import { PrimaryButton } from "../../components/button";

export const Join = () => (
  <Container>
    <div>[ Reimagine Waste ]</div>
    <div>Co-Own the Infrastructure That</div>
    <div>Powers a Greener Future</div>
    <div>A digital association where your weekly contribution builds waste-to-energy factories.</div>
    <StyledButton>Join the Association</StyledButton>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 64px auto 128px;
  max-width: 640px;

  > div:nth-of-type(1) {
    color: var(--placeholder, #85888e);
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 24px;
  }
  > div:nth-of-type(2) {
    color: var(--text-primary-900, #f5f5f6);
    font-family: "Outfit";
    font-size: 30px;
    font-weight: 700;
    line-height: 38px; /* 126.667% */
    margin-bottom: 4px;
  }
  > div:nth-of-type(3) {
    background: var(--Gradient-Linear-Color-26, linear-gradient(45deg, #39a0ff 0%, #8fff85 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: "Outfit";
    font-size: 36px;
    font-weight: 700;
    line-height: 44px; /* 122.222% */
    letter-spacing: -0.72px;
    margin-bottom: 12px;
  }
  > div:nth-of-type(4) {
    color: var(--text-secondary-700, #cecfd2);
    font-weight: 500;
    max-width: 440px;
    margin-bottom: 24px;
  }
`;

const StyledButton = styled(PrimaryButton)`
  padding: 14px 20px;
  font-size: 18px;
  line-height: 28px;
  width: fit-content;
  border-radius: 20px;
`;
