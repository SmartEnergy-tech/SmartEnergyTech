import styled from "styled-components";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import { PrimaryButton, SecondaryButton } from "../../components/button";
import { Field } from "../../components/field";

import showEyeIcon from "../../assets/show-eye.svg";
import hideEyeIcon from "../../assets/hide-eye.svg";
import CheckFillIcon from "../../assets/check-fill.svg?react";
import { ShowHidePassword, Validations } from "../reset-password";

export const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [passHaveMin8, setPassHaveMin8] = useState(false);
  const [passHaveSpecialChar, setPassHaveSpecialChar] = useState(false);
  const [passAreSame, setPassAreSame] = useState(false);

  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const min8Chars = /^.{8,}$/.test(newPassword);
    const oneSpecialChar = /[!@#$%^&*(),.?":{}|<>_\-\\[\]\/+=~`]/.test(newPassword);
    const areSame = Boolean(newPassword && newPassword === confirmNewPassword);

    setPassHaveMin8(min8Chars);
    setPassHaveSpecialChar(oneSpecialChar);
    setPassAreSame(areSame);
  }, [newPassword, confirmNewPassword]);

  const onSubmit = async () => {
    try {
      toast.success("Password was changed with success");
      navigate("/profile");
    } catch (error) {
      console.error(error);
      toast.error("Failed to reset. Please try again.");
    }
  };

  const onCancel = async () => {
    navigate("/profile");
  };

  const isBtnDisabled =
    !passHaveMin8 || !passHaveSpecialChar || !passAreSame || !oldPassword || !newPassword || !confirmNewPassword;

  return (
    <Container>
      <Title>Change Password</Title>
      <Inputs>
        <Field
          value={oldPassword}
          onChange={setOldPassword}
          placeholder="Enter your old password"
          label="Old Password"
          type={showPassword.oldPassword ? "text" : "password"}
          endAdornment={
            <ShowHidePassword
              onClick={() => setShowPassword((state) => ({ ...state, oldPassword: !showPassword.oldPassword }))}
            >
              {showPassword.oldPassword ? (
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
          value={newPassword}
          onChange={setNewPassword}
          placeholder="Enter your new password"
          label="New Password"
          type={showPassword.newPassword ? "text" : "password"}
          endAdornment={
            <ShowHidePassword
              onClick={() => setShowPassword((state) => ({ ...state, newPassword: !showPassword.newPassword }))}
            >
              {showPassword.newPassword ? (
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
        <Validations style={{ marginTop: "0px" }}>
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
        <Field
          value={confirmNewPassword}
          onChange={setConfirmNewPassword}
          placeholder="Confirm your new password"
          label="Confirm password"
          type={showPassword.confirmNewPassword ? "text" : "password"}
          endAdornment={
            <ShowHidePassword
              onClick={() =>
                setShowPassword((state) => ({ ...state, confirmNewPassword: !showPassword.confirmNewPassword }))
              }
            >
              {showPassword.confirmNewPassword ? (
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

      <Actions>
        <PrimaryButton style={{ marginTop: "var(--spacing-3xl, 24px)" }} disabled={isBtnDisabled} onClick={onSubmit}>
          Reset password
        </PrimaryButton>
        <SecondaryButton onClick={onCancel} className="cancel">
          Cancel
        </SecondaryButton>
      </Actions>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 700px;
  width: 100%;
  margin: 0px auto;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
  @media (max-width: 769px) {
    padding: var(--spacing-2xl, 20px);
  }
`;

const Title = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text lg/Semibold */

  font-size: var(--Font-size-text-lg, 18px);

  font-weight: 600;
  line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  margin-bottom: var(--spacing-xl, 16px);
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl, 20px);
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  .cancel {
    @media (min-width: 770px) {
      display: none;
    }
  }
`;
