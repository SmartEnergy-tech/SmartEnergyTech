import styled from "styled-components";

import avatarImg from "../../assets/avatar.svg";
import changePasswordImg from "../../assets/change-password.svg";
import arrowLeftImg from "../../assets/arrow-left.svg";
import { PrimaryButton } from "../../components/button";

export const ProfilePage = () => {
  return (
    <Container>
      <Header>
        <AvatarContainer>
          <img src={avatarImg} />
        </AvatarContainer>
        <NameAndId>
          <div className="name">[RegistrationName]</div>
          <div className="id">ID: 5a4sd89f4sagf49a</div>
        </NameAndId>
        <PrimaryButton>Upload Avatar</PrimaryButton>
      </Header>
      <InfoContainer>
        <PersonalInfo>
          <CardTitle>Personal Information</CardTitle>
          <PersonalInfoRow>
            <div className="label">Name</div>
            <div className="value">[RegistrationName]</div>
          </PersonalInfoRow>
          <PersonalInfoRow>
            <div className="label">Email</div>
            <div className="value">[email@example.com]</div>
          </PersonalInfoRow>
        </PersonalInfo>
        <SettingsContainer>
          <CardTitle>Settings</CardTitle>
          <SettingsButton>
            <img src={changePasswordImg} />
            <div className="label">Change Password</div>
            <img className="arrow" src={arrowLeftImg} />
          </SettingsButton>
        </SettingsContainer>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl, 16px);
  padding: var(--spacing-3xl, 24px);
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
  button {
    display: flex;
    padding: var(--spacing-md, 8px) var(--spacing-lg, 12px);
    justify-content: center;
    align-items: center;
    gap: var(--spacing-xs, 4px);
    border-radius: var(--radius-2xl, 16px);
    border: 2px solid var(--Gradient-skeuemorphic-gradient-border, rgba(255, 255, 255, 0.12));
    background: var(--Component-colors-Components-Buttons-Primary-button-primary-bg, #00c1ba);

    /* Shadows/shadow-xs-skeuomorphic */
    box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
      0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
      0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
    margin-left: auto;
  }
  @media (max-width: 769px) {
    flex-wrap: wrap;
    button {
      margin-left: 0px;
      width: 100%;
    }
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;

const PersonalInfo = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const CardTitle = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text lg/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-lg, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
`;

const SettingsContainer = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const AvatarContainer = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--radius-full, 9999px);
  border: 0.75px solid var(--Component-colors-Components-Avatars-avatar-contrast-border, rgba(255, 255, 255, 0.12));
  background: var(--Component-colors-Components-Avatars-avatar-bg, #1f242f);
  > img {
    width: 32px;
  }
`;

const NameAndId = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-xs, 4px);
  .name {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Text xl/Semibold */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-xl, 20px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-text-xl, 30px); /* 150% */
  }
  .id {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text md/Regular */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-md, 16px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--Line-height-text-md, 24px); /* 150% */
  }
`;

const PersonalInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md, 8px);
  > * {
    /* Text md/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-md, 16px);
    font-style: normal;
    line-height: var(--Line-height-text-md, 24px); /* 150% */
  }
  .label {
    color: var(--colors-text-text-tertiary-600, #94969c);
    font-weight: 400;
  }

  .value {
    color: var(--colors-text-text-primary-900, #f5f5f6);
    font-weight: 500;
  }
`;

const SettingsButton = styled.div`
  display: flex;
  padding: 28px var(--spacing-2xl, 20px) 28px var(--spacing-xl, 16px);
  gap: 12px;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);
  .label {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Text md/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-md, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-md, 24px); /* 150% */
  }
  .arrow {
    margin-left: auto;
    rotate: 180deg;
    width: 24px;
  }
`;
