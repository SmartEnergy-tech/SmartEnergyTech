import styled from "styled-components";
import { useState } from "react";
import { useUnit } from "effector-react";
import { useNavigate } from "react-router";

import avatarImg from "../../assets/avatar.svg";
import changePasswordImg from "../../assets/change-password.svg";
import arrowLeftImg from "../../assets/arrow-left.svg";
import { PrimaryButton, SecondaryButton } from "../../components/button";
import { AvatarModal } from "../../components/avatar-modal";
import { $avatar } from "../../store";
import { DeleteAvatarModal } from "../../components/avatar-modal/delete-avatar";

export const ProfilePage = () => {
  const [uploadAvatar, setUploadAvatar] = useState(false);
  const [deleteAvatar, setDeleteAvatar] = useState(false);

  const avatar = useUnit($avatar);

  const navigate = useNavigate();

  const changePassword = () => navigate("/change-password");

  return (
    <>
      {deleteAvatar && <DeleteAvatarModal onClose={() => setDeleteAvatar(false)} />}
      {uploadAvatar && <AvatarModal onClose={() => setUploadAvatar(false)} />}
      <Container>
        <Header>
          <AvatarContainer>
            <img src={avatar || avatarImg} width={avatar ? "100%" : "32px"} />
          </AvatarContainer>
          <NameAndId>
            <div className="name">[RegistrationName]</div>
            <div className="id">ID: 5a4sd89f4sagf49a</div>
          </NameAndId>
          <AvatarActions>
            {avatar && <SecondaryButton onClick={() => setDeleteAvatar(true)}>Delete Avatar</SecondaryButton>}
            <PrimaryButton onClick={() => setUploadAvatar(true)}>Upload Avatar</PrimaryButton>
          </AvatarActions>
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
            <SettingsButton onClick={changePassword}>
              <img src={changePasswordImg} />
              <div className="label">Change Password</div>
              <img className="arrow" src={arrowLeftImg} />
            </SettingsButton>
          </SettingsContainer>
        </InfoContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
  @media (max-width: 769px) {
    padding: var(--spacing-2xl, 20px);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl, 16px);
  padding: var(--spacing-3xl, 24px);
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  @media (max-width: 769px) {
    flex-wrap: wrap;
    padding: var(--spacing-2xl, 20px);
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
  @media (max-width: 769px) {
    padding: var(--spacing-2xl, 20px);
  }
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
  @media (max-width: 769px) {
    padding: var(--spacing-2xl, 20px);
  }
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

const AvatarActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg, 12px);
  margin-left: auto;
  button {
    padding: var(--spacing-md, 8px) var(--spacing-lg, 12px);
  }
  @media (max-width: 769px) {
    flex-direction: column-reverse;
    margin-left: 0px;
    width: 100%;
    button {
      width: 100%;
    }
  }
`;
