import styled from "styled-components";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

import { LoginLayout } from "../../layout/auth";
import { GoogleAuth } from "../../components/auth-google";
import { Field } from "../../components/field";
import showEyeIcon from "../../assets/show-eye.svg";
import hideEyeIcon from "../../assets/hide-eye.svg";
import { PrimaryButton } from "../../components/button";

export const SignUpPage = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const isBtnDisabled = useMemo(() => Object.values(state).some((el) => !el), [state]);

  const navigate = useNavigate();
  const toLogIn = () => navigate("/log-in");

  const onChangeName = (name: string) => setState((state) => ({ ...state, name }));
  const onChangeEmail = (email: string) => setState((state) => ({ ...state, email }));
  const onChangePassword = (password: string) => setState((state) => ({ ...state, password }));

  const onSubmit = async () => {
    try {
      await axios.post("/auth/register", state);
      toast.success("Verify email to confirm registration.");
    } catch (error: any) {
      const message = error.response.data.message || "Unknown error";
      toast.error(`Failed to register: ${message}`);
    }
  };

  return (
    <LoginLayout>
      <Container>
        <Title>Sign up</Title>
        <Info>Join the ENG-C community and start your eco-earning journey.</Info>
        <Inputs>
          <Field label="Name" value={state.name} onChange={onChangeName} placeholder="Enter your name" />
          <Field
            label="Email"
            value={state.email}
            onChange={onChangeEmail}
            placeholder="Enter your email"
            autoComplete="new-email"
            name="not-a-username"
          />
          <PasswordWithTip>
            <Field
              name="newPassword"
              autoComplete="new-password"
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
            <div className="tip">Must be at least 8 characters.</div>
          </PasswordWithTip>
        </Inputs>

        <PrimaryButton disabled={isBtnDisabled} style={{ margin: "24px 0px 16px" }} onClick={onSubmit}>
          Get started
        </PrimaryButton>
        <GoogleAuth type="signup" />
        <SignUp>
          Already have an account?
          <div onClick={toLogIn}>Log in</div>
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

const PasswordWithTip = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm, 6px);
  .tip {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text sm/Regular */

    font-size: var(--Font-size-text-sm, 14px);

    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }
`;
