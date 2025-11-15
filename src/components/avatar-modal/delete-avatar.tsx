import styled from "styled-components";

import CloseIcon from "../../assets/close.svg?react";
import trashcanImg from "../../assets/trashcan.svg";

import { setAvatar } from "../../store";
import { SecondaryButton } from "../button";

interface Props {
  onClose: () => void;
}

export const DeleteAvatarModal = ({ onClose }: Props) => {
  const onDelete = () => {
    setAvatar("");
    onClose();
  };

  return (
    <Container>
      <Content>
        <InfoContainer>
          <Header>
            <DeleteIconContainer>
              <img src={trashcanImg} />
            </DeleteIconContainer>
            <CloseIcon onClick={onClose} />
          </Header>
          <Title>Delete profile picture?</Title>
          <Info>Are you sure you want to delete your current profile picture?</Info>
        </InfoContainer>
        <Actions>
          <SecondaryButton onClick={onClose}>Keep</SecondaryButton>
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </Actions>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(31, 36, 47, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: var(--radius-xl, 12px);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xl */
  box-shadow: 0 20px 24px -4px var(--Colors-Effects-Shadows-shadow-xl_01, rgba(255, 255, 255, 0)),
    0 8px 8px -4px var(--Colors-Effects-Shadows-shadow-xl_02, rgba(255, 255, 255, 0));
  @media (max-width: 769px) {
    margin: 0px var(--container-padding-mobile, 16px);
  }
`;

const Header = styled.div`
  display: flex;
  gap: var(--spacing-xl, 16px);
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text lg/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-lg, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  margin-bottom: -12px;
`;

const Info = styled.div`
  color: var(--colors-text-text-tertiary-600, #94969c);

  /* Text sm/Regular */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;

const Actions = styled.div`
  display: flex;
  padding: var(--spacing-4xl, 32px) var(--spacing-3xl, 24px) var(--spacing-3xl, 24px) var(--spacing-3xl, 24px);
  gap: var(--spacing-lg, 12px);
  align-items: center;
  > * {
    width: 100%;
  }

  @media (max-width: 769px) {
    flex-direction: column-reverse;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  padding: var(--spacing-3xl, 24px) var(--spacing-3xl, 24px) 0 var(--spacing-3xl, 24px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
`;

const DeleteIconContainer = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-full, 9999px);
  background: var(--Colors-Background-bg-error-secondary, #d92d20);
`;

const DeleteButton = styled(SecondaryButton)`
  border-radius: var(--radius-md, 8px);
  border: 2px solid var(--Gradient-skeuemorphic-gradient-border, rgba(255, 255, 255, 0.12));
  background: var(--Component-colors-Components-Buttons-Primary-error-button-primary-error-bg, #d92d20);

  /* Shadows/shadow-xs-skeuomorphic */
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
    0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
    0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
`;
