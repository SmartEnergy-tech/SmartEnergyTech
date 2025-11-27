import styled from "styled-components";
import { useMemo, useState } from "react";

import { LoginLayout } from "../../layout/auth";
import { GoogleAuth } from "../../components/auth-google";
import { Field } from "../../components/field";
import showEyeIcon from "../../assets/show-eye.svg";
import hideEyeIcon from "../../assets/hide-eye.svg";
import { Checkbox } from "../../components/checkbox";
import { useNavigate } from "react-router";
import { PrimaryButton } from "../../components/button";

export const LogInPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const isBtnDisabled = useMemo(() => Object.values(state).some((el) => !el), [state]);

  const navigate = useNavigate();
  const toForgotPassword = () => navigate("/forgot-password");
  const toSignUp = () => navigate("/sign-up");

  const onChangeEmail = (email: string) => setState((state) => ({ ...state, email }));
  const onChangePassword = (password: string) => setState((state) => ({ ...state, password }));

  return (
    <LoginLayout>
      <Container>
        <Title>Log in</Title>
        <Info>Welcome back! Please enter your details.</Info>
        <Inputs>
          <Field label="Email" value={state.email} onChange={onChangeEmail} placeholder="Enter your email" />
          <Field
            type={showPassword ? "text" : "password"}
            label="Password"
            value={state.password}
            onChange={onChangePassword}
            placeholder="Enter your password"
            endAdornment={
              <ShowHidePassword onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
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
        <RememberMe>
          <Checkbox checked={rememberMe} onChange={setRememberMe} label=" Remember for 30 days" />
          <ForgotPassword onClick={toForgotPassword}>Forgot password</ForgotPassword>
        </RememberMe>
        <PrimaryButton disabled={isBtnDisabled} style={{ marginBottom: "16px" }}>
          Log In
        </PrimaryButton>
        <GoogleAuth type="login" />
        <SignUp>
          Don't have an account?
          <div onClick={toSignUp}>Sign up</div>
        </SignUp>
      </Container>
    </LoginLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Display md/Semibold */
  font-family: var(--Font-family-font-family-display, Outfit);
  font-size: var(--Font-size-display-md, 36px);

  font-weight: 600;
  line-height: var(--Line-height-display-md, 44px); /* 122.222% */
  letter-spacing: -0.72px;
  margin-bottom: var(--spacing-lg, 12px);
`;

const Info = styled.div`
  color: var(--colors-text-text-tertiary-600, #94969c);

  margin-bottom: var(--spacing-4xl, 32px);
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl, 20px);
`;

const ShowHidePassword = styled.div`
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

const RememberMe = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  margin: var(--spacing-3xl, 24px) 0px;
`;

const ForgotPassword = styled.div`
  user-select: none;

  cursor: pointer;
  color: var(--Component-colors-Components-Buttons-Tertiary-color-button-tertiary-color-fg, #cecfd2);

  /* Text sm/Semibold */

  font-size: var(--Font-size-text-sm, 14px);

  font-weight: 600;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

const SignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm, 6px);
  margin-top: 32px;
  color: var(--colors-text-text-tertiary-600, #94969c);

  /* Text sm/Regular */

  font-size: var(--Font-size-text-sm, 14px);

  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  > div {
    cursor: pointer;
    user-select: none;
    color: var(--Component-colors-Components-Buttons-Tertiary-color-button-tertiary-color-fg, #cecfd2);

    /* Text sm/Semibold */

    font-size: var(--Font-size-text-sm, 14px);

    font-weight: 600;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }
`;
