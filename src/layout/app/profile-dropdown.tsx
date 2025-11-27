import { useState } from "react";
import styled, { css } from "styled-components";

import dropdownIcon from "../../assets/dropdown.svg";
import avatarIcon from "../../assets/avatar.svg";
import logoutIcon from "../../assets/log-out.svg";
import { setIsAuthenticated } from "../../store";
import { useNavigate } from "react-router";

export const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggle = () => setOpen(!open);

  const onLogout = () => {
    toggle();
    localStorage.removeItem("jwt");
    setIsAuthenticated(false);
  };

  const goToProfile = () => {
    toggle();
    navigate("/profile");
  };

  return (
    <Container $open={open} onClick={toggle}>
      <Button>
        <ProfileContainer>
          <img src={avatarIcon} />
        </ProfileContainer>
        <Label>Profile</Label>
        <Icon open={open}>
          <img src={dropdownIcon} />
        </Icon>
      </Button>
      {open && (
        <Dropdown>
          <Option onClick={goToProfile}>
            <img src={avatarIcon} />
            View profile
          </Option>
          <Option onClick={onLogout}>
            <img src={logoutIcon} />
            Log Out
          </Option>
        </Dropdown>
      )}
    </Container>
  );
};

const Container = styled.div<{ $open: boolean }>`
  position: relative;
  cursor: pointer;
  user-select: none;
  display: flex;
  padding: var(--spacing-md, 8px) var(--spacing-lg, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs, 4px);
  border-radius: var(--radius-2xl, 16px);
  border: 1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #333741);
  background: var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #161b26);

  /* Shadows/shadow-xs-skeuomorphic */
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
    0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
    0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));

  ${({ $open }) =>
    $open &&
    css`
      border-radius: var(--radius-2xl, 16px);
      border: 1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #333741);
      background: var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #161b26);

      /* Focus rings/focus-ring-shadow-xs-skeuomorphic */
      box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
        0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
        0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0)),
        0 0 0 2px var(--Colors-Background-bg-primary, #0c111d),
        0 0 0 4px var(--Colors-Effects-Focus-rings-focus-ring, #00f1e8);
    `}
`;

const ProfileContainer = styled.div`
  border-radius: 50%;
  background: var(--Component-colors-Components-Avatars-avatar-bg, #1f242f);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3a3e48;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-xs, 4px);
`;

const Label = styled.div`
  color: var(--Component-colors-Components-Buttons-Secondary-button-secondary-fg, #cecfd2);

  /* Text sm/Semibold */

  font-size: var(--Font-size-text-sm, 14px);

  font-weight: 600;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

const Icon = styled.div<{ open: boolean }>`
  display: flex;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  right: 0px;
  z-index: 10;
  width: 204px;
  padding: var(--spacing-xs, 4px) 0;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-md, 8px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-lg */
  box-shadow: 0 12px 16px -4px var(--Colors-Effects-Shadows-shadow-lg_01, rgba(255, 255, 255, 0)),
    0 4px 6px -2px var(--Colors-Effects-Shadows-shadow-lg_02, rgba(255, 255, 255, 0));
`;

const Option = styled.div`
  padding: 9px 10px;
  cursor: pointer;
  display: flex;
  gap: var(--spacing-md, 8px);
  align-items: center;
  border-radius: var(--radius-sm, 6px);
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  color: var(--colors-text-text-secondary-700, #cecfd2);

  /* Text sm/Medium */

  font-size: var(--Font-size-text-sm, 14px);

  font-weight: 500;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;
