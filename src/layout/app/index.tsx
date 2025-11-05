import styled, { css } from "styled-components";
import { useLocation, useNavigate } from "react-router";
import { useEffect, type PropsWithChildren } from "react";

import LogoWithTxt from "../../assets/logo-with-txt.svg?react";
import dashboardIcon from "../../assets/navigation/dashboard.svg";
import inviteIcon from "../../assets/navigation/invite.svg";
import marketplaceIcon from "../../assets/navigation/marketplace.svg";
import metricsIcon from "../../assets/navigation/metrics.svg";
import arrowLeftIcon from "../../assets/arrow-left.svg";
import notificationIcon from "../../assets/notification.svg";
import { LanguageSelect } from "./language-select";
import { ProfileDropdown } from "./profile-dropdown";
import { useUnit } from "effector-react";
import { $isAuthenticated, $isNotificationsOpen, setIsOpenNotifications } from "../../store";
import { Notifications } from "../../components/notifications";
import { MobileMenu } from "./mobile-menu";

export const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: dashboardIcon,
  },
  {
    label: "Invite",
    path: "/invite",
    icon: inviteIcon,
  },
  {
    label: "Marketplace",
    path: "/marketplace",
    icon: marketplaceIcon,
  },
  {
    label: "Metrics",
    path: "/metrics",
    icon: metricsIcon,
  },
];

interface Props extends PropsWithChildren {
  title: string;
  backPath?: string;
}

export const AppLayout = ({ title, children, backPath }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const showNotifications = useUnit($isNotificationsOpen);

  const isAuthenticated = useUnit($isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      {showNotifications && <Notifications />}
      <MobileMenu />
      <Container>
        <Navigation>
          <LogoWithTxt />
          <MenuContainer>
            <div className="title">Menu</div>
            <MenuItems>
              {navItems.map(({ label, path, icon }) => (
                <MenuItem key={path} $active={path === pathname} onClick={() => navigate(path)}>
                  <img src={icon} />
                  {label}
                </MenuItem>
              ))}
            </MenuItems>
          </MenuContainer>
        </Navigation>
        <Content id="app-content">
          <Header>
            <div
              className="title"
              {...(backPath && {
                onClick: () => navigate(backPath),
                style: { cursor: "pointer" },
              })}
            >
              {backPath && (
                <>
                  <img src={arrowLeftIcon} style={{ marginRight: "13px" }} />
                  &nbsp;
                </>
              )}
              {title}
            </div>
            <Actions>
              <WalletAction>Wallet: Coming soon</WalletAction>
              <LanguageSelect />
              <Action style={{ padding: "var(--spacing-md, 8px)" }} onClick={() => setIsOpenNotifications(true)}>
                <img src={notificationIcon} />
              </Action>
              <ProfileDropdown />
            </Actions>
          </Header>
          {children}
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: var(--spacing-3xl, 24px);
  gap: var(--spacing-3xl, 24px);
  height: 100%;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 var(--spacing-xl, 16px);
    padding-top: calc(var(--spacing-xl, 16px) + 72px);
    height: fit-content;
  }
`;

const Navigation = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px) var(--spacing-xl, 16px);
  flex-direction: column;
  gap: var(--spacing-5xl, 40px);
  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text sm/Regular */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-sm, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
    margin-bottom: var(--spacing-2xl, 20px);
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg, 12px);
`;

const MenuItem = styled.div<{ $active: boolean }>`
  cursor: pointer;
  user-select: none;
  display: flex;
  width: 168px;
  padding: var(--spacing-xl, 16px);
  align-items: center;
  gap: 8px;

  color: var(--colors-text-text-secondary-700, #cecfd2);

  /* Text md/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-md, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-md, 24px); /* 150% */

  ${({ $active }) =>
    $active &&
    css`
      border-radius: var(--radius-3xl, 20px);
      background: var(--Colors-Background-bg-secondary, #161b26);
      color: var(--colors-text-text-primary-900, #f5f5f6);
    `}

  &:hover {
    border-radius: var(--radius-3xl, 20px);
    background: var(--Colors-Background-bg-secondary, #161b26);
    color: var(--colors-text-text-primary-900, #f5f5f6);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl, 24px);
`;

const Header = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
  width: 100%;
  .title {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Display xs/Semibold */
    font-family: var(--Font-family-font-family-display, Outfit);
    font-size: var(--Font-size-display-xs, 24px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-display-xs, 32px); /* 133.333% */
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg, 12px);
`;

export const Action = styled.div`
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
`;

export const WalletAction = styled(Action)`
  border-radius: var(--radius-2xl, 16px);
  border: 1px solid var(--Colors-Border-border-disabled_subtle, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs */
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
  color: var(--Colors-Foreground-fg-disabled, #85888e);

  /* Text sm/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;
