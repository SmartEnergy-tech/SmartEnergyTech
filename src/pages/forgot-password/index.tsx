import styled from "styled-components";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import lockImg from "../../assets/lock.svg";
import emailImg from "../../assets/email.svg";
import ArrowLeft from "../../assets/arrow-left.svg?react";
import { Header } from "../../components/header";
import { Field } from "../../components/field";
import { PrimaryButton } from "../../components/button";
import { ErrorMessage } from "../../components/error-message";

export const ForgotPasswordPage = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <Header />
      <Container>
        {emailSent ? (
          <SentInfo email={email} onTryAgain={() => setEmailSent(false)} />
        ) : (
          <ForgotForm onSent={() => setEmailSent(true)} email={email} setEmail={setEmail} />
        )}
      </Container>
    </>
  );
};

interface ForgotFormProps {
  onSent: () => void;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

const ForgotForm = ({ onSent, email, setEmail }: ForgotFormProps) => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!email) return;
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    setError(isValid ? "" : "Invalid email");
  }, [email]);

  const onSubmit = async () => {
    try {
      onSent();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send email. Please try again");
    }
  };

  return (
    <>
      <IconContainer>
        <img src={lockImg} alt="lock" />
      </IconContainer>
      <Title>Forgot password?</Title>
      <Info>No worries, we'll send you reset instructions.</Info>
      <Field value={email} onChange={setEmail} placeholder="Enter your email" label="Email" />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <PrimaryButton
        style={{ margin: "var(--spacing-3xl, 24px) 0px var(--spacing-4xl, 32px)" }}
        disabled={!email || Boolean(error)}
        onClick={onSubmit}
      >
        Reset password
      </PrimaryButton>
      <BackToLogin onClick={() => navigate("/log-in")}>
        <ArrowLeft />
        Log In
      </BackToLogin>
    </>
  );
};

const SentInfo = ({ email, onTryAgain }: { email: string; onTryAgain: () => void }) => {
  const openEmailApp = () => {};
  const navigate = useNavigate();

  return (
    <>
      <IconContainer>
        <img src={emailImg} alt="email" />
      </IconContainer>
      <Title>Check your email</Title>
      <Info>We sent a password reset link to {email}</Info>
      <PrimaryButton style={{ marginBottom: "var(--spacing-4xl, 32px)" }} onClick={openEmailApp}>
        Open email app
      </PrimaryButton>
      <Info>
        Didn't receive the email? &nbsp;<span onClick={onTryAgain}>Try again</span>
      </Info>
      <BackToLogin onClick={() => navigate("/log-in")}>
        <ArrowLeft />
        Back to log in
      </BackToLogin>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100% - 80px);
  max-width: 360px;
  width: 100%;
  margin: 0px auto;
  > * {
    width: 100%;
  }
`;

const Title = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);
  text-align: center;

  /* Display sm/Semibold */
  font-family: var(--Font-family-font-family-display, Outfit);
  font-size: var(--Font-size-display-sm, 30px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-display-sm, 38px); /* 126.667% */
  margin-bottom: var(--spacing-lg, 12px);
`;

const Info = styled.div`
  color: var(--colors-text-text-tertiary-600, #94969c);
  text-align: center;

  /* Text md/Regular */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-md, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--Line-height-text-md, 24px); /* 150% */
  margin-bottom: var(--spacing-4xl, 32px);
  span {
    user-select: none;
    cursor: pointer;
    color: var(--Component-colors-Components-Buttons-Tertiary-color-button-tertiary-color-fg, #cecfd2);

    /* Text sm/Semibold */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-sm, 14px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin-bottom: var(--spacing-3xl, 24px);
  width: 56px;
  height: 56px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: var(--spacing-lg, 12px);
  border: 1px solid var(--Component-colors-Components-Icons-Featured-icons-Modern-featured-icon-modern-border, #333741);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs-skeuomorphic */
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
    0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
    0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
`;

const BackToLogin = styled.div`
  user-select: none;
  cursor: pointer;
  color: var(--Component-colors-Components-Buttons-Tertiary-button-tertiary-fg, #94969c);

  /* Text sm/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */

  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm, 6px);
  path {
    stroke: var(--Component-colors-Components-Buttons-Tertiary-button-tertiary-fg, #94969c);
  }
`;
