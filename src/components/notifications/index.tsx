import styled, { css } from "styled-components";
import { useRef, useState } from "react";

import closeIcon from "../../assets/close.svg";
import LogoIcon from "../../assets/logo.svg?react";
import { setIsOpenNotifications } from "../../store";

export const Notifications = () => {
  const [tryClose, setTryClose] = useState(false);

  const closeRef = useRef(false);

  const onClose = () => {
    setTryClose(true);
    if (!closeRef.current) {
      setTimeout(() => {
        setIsOpenNotifications(false);
      }, 250);
    }
    closeRef.current = true;
  };

  return (
    <Container $close={tryClose}>
      <Content $close={tryClose}>
        <CloseBtn onClick={onClose}>
          <img src={closeIcon} />
        </CloseBtn>
        <Title>Notifications</Title>
        <NotificationsItems>
          <NotificationItem>
            <UnreadDot />
            <LogoIcon />
            <div>
              <NotifTitle>
                <div>SmartEnergy</div>
                <div>Just now</div>
              </NotifTitle>
              <NotifMessage>Welcome to the community John!</NotifMessage>
            </div>
          </NotificationItem>
          <NotificationItem>
            <UnreadDot />
            <LogoIcon />
            <div>
              <NotifTitle>
                <div>SmartEnergy</div>
                <div>Just now</div>
              </NotifTitle>
              <NotifMessage>Welcome to the community John!</NotifMessage>
            </div>
          </NotificationItem>
          <NotificationItem>
            <UnreadDot />
            <LogoIcon />
            <div>
              <NotifTitle>
                <div>SmartEnergy</div>
                <div>Just now</div>
              </NotifTitle>
              <NotifMessage>Welcome to the community John!</NotifMessage>
            </div>
          </NotificationItem>
          <NotificationItem>
            <UnreadDot />
            <LogoIcon />
            <div>
              <NotifTitle>
                <div>SmartEnergy</div>
                <div>Just now</div>
              </NotifTitle>
              <NotifMessage>Welcome to the community John!</NotifMessage>
            </div>
          </NotificationItem>
          <NotificationItem>
            <UnreadDot />
            <LogoIcon />
            <div>
              <NotifTitle>
                <div>SmartEnergy</div>
                <div>Just now</div>
              </NotifTitle>
              <NotifMessage>Welcome to the community John!</NotifMessage>
            </div>
          </NotificationItem>
        </NotificationsItems>
      </Content>
    </Container>
  );
};

const Container = styled.div<{ $close: boolean }>`
  ${({ $close }) =>
    $close
      ? css`
          @keyframes backgroundFadeOut {
            from {
              background: rgba(31, 36, 47, 0.7);
              backdrop-filter: blur(8px);
            }
            to {
              background: transparent;
              backdrop-filter: blur(0px);
            }
          }
          animation: backgroundFadeOut 0.25s ease-in-out forwards;
        `
      : css`
          @keyframes backgroundFadeIn {
            from {
              background: transparent;
              backdrop-filter: blur(0px);
            }
            to {
              background: rgba(31, 36, 47, 0.7);
              backdrop-filter: blur(8px);
            }
          }
          animation: backgroundFadeIn 0.25s ease-in-out forwards;
        `}

  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;

  display: flex;
  justify-content: flex-end;
  padding: 24px;
`;

const Content = styled.div<{ $close: boolean }>`
  ${({ $close }) =>
    $close
      ? css`
          @keyframes slideInToRight {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(100%);
            }
          }
          animation: slideInToRight 0.25s ease-in-out forwards;
        `
      : css`
          @keyframes slideInFromRight {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0%);
            }
          }

          animation: slideInFromRight 0.25s ease-in-out forwards;
        `}

  position: relative;
  max-width: 564px;
  width: 100%;
  display: flex;
  padding: var(--spacing-4xl, 32px);
  flex-direction: column;
  align-items: center;
  gap: 60px;
  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const Title = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text lg/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-lg, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseBtn = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  width: 36px;
  padding: var(--spacing-md, 8px);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 32px;
  right: 32px;
`;

const NotificationsItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NotificationItem = styled.div`
  padding: 8px 0px;
  margin: 0px 10.5px;
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg, 12px);
  align-self: stretch;
  border-bottom: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  position: relative;
  > div {
    display: flex;
    flex-direction: column;
  }
`;

const NotifTitle = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md, 8px);
  > div:first-of-type {
    color: var(--colors-text-text-secondary-700, #cecfd2);

    /* Text sm/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-sm, 14px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }

  > div:last-of-type {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text xs/Regular */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-xs, 12px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--Line-height-text-xs, 18px); /* 150% */
  }
`;

const NotifMessage = styled.div`
  color: var(--colors-text-text-tertiary-600, #94969c);

  /* Text sm/Regular */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

const UnreadDot = styled.div`
  position: absolute;
  top: 8px;
  right: 0px;
  width: 8px;
  height: 8px;
  background-color: #47cd89;
  border-radius: 50%;
`;
