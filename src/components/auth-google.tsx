import { useGoogleLogin } from "@react-oauth/google";
import styled from "styled-components";

import googleImg from "../assets/socials/google.svg";
import { setIsAuthenticated } from "../store";

interface Props {
  type: "login" | "signup";
}

export const GoogleAuth = ({ type }: Props) => {
  const auth = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      setIsAuthenticated(true);
      localStorage.setItem("jwt", credentialResponse.access_token);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  const txt = {
    login: "Sign in with Google",
    signup: "Sign up with Google",
  };

  return (
    <Button onClick={() => auth()}>
      <img src={googleImg} />
      {txt[type]}
    </Button>
  );
};

const Button = styled.button`
  user-select: none;
  cursor: pointer;
  display: flex;
  padding: 10px var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg, 12px);
  align-self: stretch;
  border-radius: var(--radius-md, 8px);
  border: 1px solid var(--Colors-Border-border-primary, #333741);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs-skeuomorphic */
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
    0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
    0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
  color: var(--colors-text-text-secondary-700, #cecfd2);

  /* Text md/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-md, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-md, 24px); /* 150% */
`;
