import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "react-toastify";

import lockImg from "../../assets/lock.svg";
import checkImg from "../../assets/check-outlined.svg";
import ArrowLeftIcon from "../../assets/arrow-left.svg?react";
import CheckFillIcon from "../../assets/check-fill.svg?react";
import { Header } from "../../components/header";
import { Field } from "../../components/field";
import { PrimaryButton } from "../../components/button";
import showEyeIcon from "../../assets/show-eye.svg";
import hideEyeIcon from "../../assets/hide-eye.svg";
import { setIsAuthenticated } from "../../store";
import axios from "axios";

export const ResetPasswordPage = () => {
  const [restored, setRestored] = useState(false);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        {restored ? (
          <RestoredPassword token={token} />
        ) : (
          <ResetForm onRestored={() => setRestored(true)} setToken={setToken} />
        )}
        <BackToLogin onClick={() => navigate("/log-in")}>
          <ArrowLeftIcon />
          Log In
        </BackToLogin>
      </Container>
    </>
  );
};

const ResetForm = ({ onRestored, setToken }: { onRestored: () => void; setToken: (value: string) => void }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passHaveMin8, setPassHaveMin8] = useState(false);
  const [passHaveSpecialChar, setPassHaveSpecialChar] = useState(false);
  const [passAreSame, setPassAreSame] = useState(false);

  const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });

  const [params] = useSearchParams();
  const code = params.get("code");

  useEffect(() => {
    const min8Chars = /^.{8,}$/.test(password);
    const oneSpecialChar = /[!@#$%^&*(),.?":{}|<>_\-\\[\]\/+=~`]/.test(password);
    const areSame = Boolean(password && password === confirmPassword);

    setPassHaveMin8(min8Chars);
    setPassHaveSpecialChar(oneSpecialChar);
    setPassAreSame(areSame);
  }, [password, confirmPassword]);

  const onSubmit = async () => {
    try {
      const res = await axios.post("/auth/reset-password", { code, password, confirmed_password: confirmPassword });
      setToken(res.data.token);
      onRestored();
    } catch (error) {
      console.error(error);
      toast.error("Failed to reset. Please try again.");
    }
  };

  const isBtnDisabled = !passHaveMin8 || !passHaveSpecialChar || !passAreSame || !password || !confirmPassword;

  return (
    <>
      <IconContainer>
        <img src={lockImg} alt="lock" />
      </IconContainer>
      <Title>Set new password</Title>
      <Info>Your new password must be different to previously used passwords.</Info>
      <Inputs>
        <Field
          value={password}
          onChange={setPassword}
          placeholder="Enter your new password"
          label="Password"
          type={showPassword.password ? "text" : "password"}
          endAdornment={
            <ShowHidePassword
              onClick={() => setShowPassword((state) => ({ ...state, password: !showPassword.password }))}
            >
              {showPassword.password ? (
                <>
                  <img src={hideEyeIcon} />
                  Hide
                </>
              ) : (
                <>
                  <img src={showEyeIcon} />
                  Show
                </>
              )}
            </ShowHidePassword>
          }
        />
        <Field
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="Confirm your new password"
          label="Confirm password"
          type={showPassword.confirmPassword ? "text" : "password"}
          endAdornment={
            <ShowHidePassword
              onClick={() => setShowPassword((state) => ({ ...state, confirmPassword: !showPassword.confirmPassword }))}
            >
              {showPassword.confirmPassword ? (
                <>
                  <img src={hideEyeIcon} />
                  Hide
                </>
              ) : (
                <>
                  <img src={showEyeIcon} />
                  Show
                </>
              )}
            </ShowHidePassword>
          }
        />
      </Inputs>
      <Validations>
        <div>
          <CheckFillIcon className={passHaveMin8 ? "valid" : ""} /> Must be at least 8 characters
        </div>

        <div>
          <CheckFillIcon className={passHaveSpecialChar ? "valid" : ""} /> Must contain one special character
        </div>
        <div>
          <CheckFillIcon className={passAreSame ? "valid" : ""} /> Must match
        </div>
      </Validations>
      <PrimaryButton
        style={{ margin: "var(--spacing-3xl, 24px) 0px var(--spacing-4xl, 32px)" }}
        disabled={isBtnDisabled}
        onClick={onSubmit}
      >
        Reset password
      </PrimaryButton>
    </>
  );
};

const RestoredPassword = ({ token }: { token: string }) => {
  const navigate = useNavigate();

  const onLogin = () => {
    localStorage.setItem("jwt", token);
    setIsAuthenticated(token);
    navigate("/dashboard");
  };

  return (
    <>
      <IconContainer>
        <img src={checkImg} alt="check" />
      </IconContainer>
      <Title>Password reset</Title>
      <Info>Your password has been successfully reset. Click below to log in magically.</Info>
      <PrimaryButton style={{ marginBottom: "var(--spacing-4xl, 32px)" }} onClick={onLogin}>
        Continue
      </PrimaryButton>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100% - 80px);
  max-width: 360px;
  width: 100%;
  margin: 0px auto;
  padding: var(--spacing-6xl, 48px) 0;
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

  font-weight: 600;
  line-height: var(--Line-height-display-sm, 38px); /* 126.667% */
  margin-bottom: var(--spacing-lg, 12px);
`;

const Info = styled.div`
  color: var(--colors-text-text-tertiary-600, #94969c);
  text-align: center;

  margin-bottom: var(--spacing-4xl, 32px);
  span {
    user-select: none;
    cursor: pointer;
    color: var(--Component-colors-Components-Buttons-Tertiary-color-button-tertiary-color-fg, #cecfd2);

    /* Text sm/Semibold */

    font-size: var(--Font-size-text-sm, 14px);

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

  font-size: var(--Font-size-text-sm, 14px);

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

export const ShowHidePassword = styled.div`
  min-width: 106px;
  user-select: none;
  cursor: pointer;
  display: flex;
  padding: 10px var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm, 8px);
  border-radius: var(--spacing-none, 0) var(--radius-md, 8px) var(--radius-md, 8px) var(--spacing-none, 0);
  border: 1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #333741);
  background: var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #161b26);
  color: var(--Component-colors-Components-Buttons-Secondary-button-secondary-fg, #cecfd2);

  font-weight: 600;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl, 20px);
`;

export const Validations = styled.div`
  margin-top: var(--spacing-2xl, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg, 12px);
  > div {
    display: flex;
    align-items: center;
    gap: var(--spacing-md, 8px);
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text sm/Regular */

    font-size: var(--Font-size-text-sm, 14px);

    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }
  .valid {
    > path:first-of-type {
      fill: var(--Colors-Foreground-fg-success-primary, #17b26a);
    }
  }
`;
