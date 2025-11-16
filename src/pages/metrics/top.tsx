import styled, { css } from "styled-components";

import { StyledCard } from ".";
import { Header } from "./header";
import avatarImg from "../../assets/avatar.svg";
import avatar1Img from "../../assets/avatar-1.png";
import avatar2Img from "../../assets/avatar-2.png";

export const Top = () => {
  return (
    <StyledCard>
      <Header type="top" title="Top 3 Unlockers" info="Leading users by total unlocked ENGC" />
      <Content>
        <UserCard>
          <Place $place={1}>
            🥇
            <span>1st Place</span>
          </Place>
          <UserInfo>
            <UserAvatarAndInfo>
              <UserAvatar>
                <img src={avatar1Img} />
              </UserAvatar>
              <UserNameAndId>
                <UserName>Kyla</UserName>
                <UserId>ID: 5a4sd89f4sagf49a</UserId>
              </UserNameAndId>
            </UserAvatarAndInfo>
            <UserAmount>88,400 ENGC</UserAmount>
          </UserInfo>
        </UserCard>
        <Divider />
        <UserCard>
          <Place $place={2}>
            🥈
            <span>2nd Place</span>
          </Place>
          <UserInfo>
            <UserAvatarAndInfo>
              <UserAvatar>
                <img src={avatar2Img} />
              </UserAvatar>
              <UserNameAndId>
                <UserName>GlitchBTC</UserName>
                <UserId>ID: qahgr89f4sah579X</UserId>
              </UserNameAndId>
            </UserAvatarAndInfo>
            <UserAmount>76,200 ENGC</UserAmount>
          </UserInfo>
        </UserCard>
        <Divider />
        <UserCard>
          <Place $place={3}>
            🥉
            <span>3rd Place</span>
          </Place>
          <UserInfo>
            <UserAvatarAndInfo>
              <UserAvatar $default>
                <img src={avatarImg} />
              </UserAvatar>
              <UserNameAndId>
                <UserName>user123</UserName>
                <UserId>ID: 6b5sd90g5sagh50b</UserId>
              </UserNameAndId>
            </UserAvatarAndInfo>
            <UserAmount>65,700 ENGC</UserAmount>
          </UserInfo>
        </UserCard>
      </Content>
    </StyledCard>
  );
};

const Content = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  border-radius: var(--radius-2xl, 16px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs */
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
  @media (max-width: 769px) {
    padding: var(--spacing-2xl, 20px);
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--Colors-Border-border-secondary, #1f242f);
`;

const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
`;

const placeColors: Record<number, any> = {
  1: css`
    background: var(--Gradient-Linear-Color-81, linear-gradient(45deg, #4b73ff 0%, #7cf7ff 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  2: css`
    color: var(--colors-text-text-primary-900, #f5f5f6);
  `,
  3: css`
    color: var(--colors-text-text-tertiary-600, #94969c);
  `,
};

const Place = styled.div<{ $place: number }>`
  * {
    font-family: var(--Font-family-font-family-display, Outfit);
    font-size: var(--Font-size-display-xs, 24px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-display-xs, 32px); /* 133.333% */
  }
  span {
    ${({ $place }) => placeColors[$place]}
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 48px;
  @media (max-width: 769px) {
    height: 48px;
  }
`;

const UserAvatarAndInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md, 8px);
  @media (max-width: 769px) {
    align-items: flex-start;
  }
`;

const UserNameAndId = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserAvatar = styled.div<{ $default?: boolean }>`
  display: flex;
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-full, 9999px);
  @media (max-width: 769px) {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
  }
  img {
    width: 100%;
  }
  ${({ $default }) =>
    $default &&
    css`
      border: 0.75px solid var(--Component-colors-Components-Avatars-avatar-contrast-border, rgba(255, 255, 255, 0.12));
      background-color: #1f242f;
      img {
        width: 28px;
        height: 28px;
        @media (max-width: 769px) {
          width: 16px;
          height: 16px;
        }
      }
    `}
`;

const UserName = styled.div`
  color: var(--colors-text-text-secondary-700, #cecfd2);

  /* Text lg/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-lg, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  @media (max-width: 769px) {
    color: var(--colors-text-text-secondary-700, #cecfd2);

    /* Text md/Bold */
    font-size: var(--Font-size-text-md, 16px);
    font-style: normal;
    font-weight: 700;
    line-height: var(--Line-height-text-md, 24px); /* 150% */
  }
`;

const UserId = styled.div`
  color: var(--colors-text-text-tertiary-600, #94969c);

  /* Text sm/Regular */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  white-space: nowrap;
  @media (max-width: 769px) {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
`;

const UserAmount = styled.div`
  white-space: nowrap;
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text lg/Bold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-lg, 18px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
`;
