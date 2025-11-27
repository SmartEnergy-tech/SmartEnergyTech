import styled, { css } from "styled-components";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import LogoWithTxt from "../../assets/logo-with-txt.svg?react";
import menuImg from "../../assets/menu.svg";
import avatarImg from "../../assets/avatar-1.png";
import CloseIcon from "../../assets/close.svg?react";
import notificationIcon from "../../assets/notification.svg";
import logoutIcon from "../../assets/log-out.svg";

import { Action, navItems } from ".";
import { setIsAuthenticated, setIsOpenNotifications } from "../../store";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onOpen = () => {
    setIsOpen(true);
    const element = document.getElementById("app-content");
    if (element) {
      element.style.overflow = "hidden";
      element.style.maxHeight = "0px";
    }
  };

  const onClose = () => {
    setIsOpen(false);
    const element = document.getElementById("app-content");
    if (element) {
      element.style.overflow = "auto";
      element.style.maxHeight = "fit-content";
    }
  };

  const toggle = () => (isOpen ? onClose() : onOpen());

  const onLogout = () => {
    toggle();
    localStorage.removeItem("jwt");
    setIsAuthenticated(false);
  };

  const goTo = (path: string) => {
    toggle();
    navigate(path);
  };

  return (
    <Container $isOpen={isOpen}>
      <Header>
        <LogoWithTxt />
        <MenuIcon onClick={toggle}>{isOpen ? <CloseIcon /> : <img src={menuImg} />}</MenuIcon>
      </Header>
      <Content $isOpen={isOpen}>
        <ProfileInfo>
          <div className="info">
            <img src={avatarImg} />
            <div className="name-and-id">
              <div className="name">[RegistrationName]</div>
              <div className="id">ID: 5a4sd89f4sagf49a</div>
            </div>
          </div>
          <ProfileButton>Profile</ProfileButton>
        </ProfileInfo>
        <WalletAndNotifications>
          <WalletAction>Wallet: Coming soon</WalletAction>
          <Action style={{ padding: "var(--spacing-md, 8px)" }} onClick={() => setIsOpenNotifications(true)}>
            <img src={notificationIcon} />
          </Action>
        </WalletAndNotifications>
        <MenuItems>
          {navItems.map(({ label, path, icon }) => (
            <MenuItem key={path} $active={path === pathname} onClick={() => goTo(path)}>
              <img src={icon} />
              {label}
            </MenuItem>
          ))}
          <Divider />
          <MenuItem $active={false} onClick={onLogout}>
            <img src={logoutIcon} />
            Log Out
          </MenuItem>
        </MenuItems>
      </Content>
    </Container>
  );
};

export const Container = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  height: 72px;
  top: 0px;
  left: 0px;
  width: 100%;
  overflow: hidden;
  z-index: 2;
  @media (min-width: 900px) {
    display: none;
  }
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      overflow: auto;
      background: var(--Colors-Background-bg-primary, #0c111d);
      height: 100vh;
    `}
`;

const Header = styled.div`
  display: flex;
  padding: var(--spacing-lg, 12px);
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MenuIcon = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  padding: var(--spacing-md, 8px);
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
  }
  path {
    stroke-width: 2px;
    stroke: var(--colors-foreground-fg-secondary-700, #cecfd2);
  }
`;

const Content = styled.div<{ $isOpen: boolean }>`
  height: 0px;
  overflow: hidden;
  display: flex;
  padding: 0 var(--spacing-xl, 16px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      overflow: auto;
      height: fit-content;
    `}
`;

const ProfileInfo = styled.div`
  display: flex;
  padding: var(--spacing-2xl, 20px);
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-xl, 16px);
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
  margin-top: var(--spacing-xl, 16px);

  .info {
    display: flex;
    align-items: center;
    gap: var(--spacing-xl, 16px);
    .name-and-id {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs, 4px);
    }

    .name {
      color: var(--colors-text-text-primary-900, #f5f5f6);

      /* Text xl/Semibold */

      font-size: var(--Font-size-text-xl, 20px);

      font-weight: 600;
      line-height: var(--Line-height-text-xl, 30px); /* 150% */
    }
    .id {
      color: var(--colors-text-text-tertiary-600, #94969c);
    }
  }
`;

const ProfileButton = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  padding: var(--spacing-md, 8px) var(--spacing-lg, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs, 4px);
  align-self: stretch;
  border-radius: var(--radius-2xl, 16px);
  border: 1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #333741);
  background: var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #161b26);

  /* Shadows/shadow-xs-skeuomorphic */
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
    0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
    0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));

  color: var(--Component-colors-Components-Buttons-Secondary-button-secondary-fg, #cecfd2);

  /* Text sm/Semibold */

  font-size: var(--Font-size-text-sm, 14px);

  font-weight: 600;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

const WalletAndNotifications = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: var(--spacing-2xl, 20px);
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const WalletAction = styled.div`
  display: flex;
  padding: var(--spacing-md, 8px) var(--spacing-lg, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs, 4px);
  flex: 1 0 0;
  border-radius: var(--radius-2xl, 16px);
  border: 1px solid var(--Colors-Border-border-disabled_subtle, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs */
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
  color: var(--Colors-Foreground-fg-disabled, #85888e);

  /* Text sm/Semibold */

  font-size: var(--Font-size-text-sm, 14px);

  font-weight: 600;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MenuItem = styled.div<{ $active: boolean }>`
  display: flex;
  padding: var(--spacing-xl, 16px);
  align-items: center;
  gap: 8px;
  border-radius: var(--radius-3xl, 20px);
  ${({ $active }) =>
    $active &&
    css`
      background: var(--Colors-Background-bg-secondary, #161b26);
    `}
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--Colors-Border-border-secondary, #1f242f);
`;
