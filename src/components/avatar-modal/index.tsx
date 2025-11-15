import styled from "styled-components";
import { useState } from "react";

import CloseIcon from "../../assets/close.svg?react";
import uploadImg from "../../assets/upload.svg";
import { AvatarCropper } from "./crop-avatar";
import { RangeInput } from "../input";
import { setAvatar } from "../../store";
import { PrimaryButton, SecondaryButton } from "../button";

interface Props {
  onClose: () => void;
}

export const AvatarModal = ({ onClose }: Props) => {
  const [file, setFile] = useState("");
  const [croppedFile, setCroppedFile] = useState("");
  const [zoom, setZoom] = useState(1.5);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setFile(reader.result?.toString() || ""));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onUpdate = () => {
    if (croppedFile) {
      setAvatar(croppedFile);
      onClose();
    }
  };

  return (
    <Container>
      <Content>
        <Header>
          <div className="label">Customize avatar</div>
          <CloseIcon onClick={onClose} />
        </Header>
        {file ? (
          <CropContainer>
            <AvatarCropper imageSrc={file} onCropComplete={(cropped) => setCroppedFile(cropped)} zoom={zoom} />
            <RangeInput value={zoom} min={1} max={10} onChange={(val) => setZoom(val)} step={0.5} />
          </CropContainer>
        ) : (
          <UploadContainer>
            <UploadContent>
              <input type="file" accept="image/png" onChange={onSelectFile} />
              <UploadImg>
                <img src={uploadImg} />
              </UploadImg>
              <InfoTxt>
                <span>Click to upload</span> or drag and drop
                <br />
                PNG or JPG (max. 1MB)
              </InfoTxt>
            </UploadContent>
          </UploadContainer>
        )}
        <Actions>
          <SecondaryButton>Cancel</SecondaryButton>
          <PrimaryButton disabled={!file} onClick={onUpdate}>
            Update
          </PrimaryButton>
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
  padding: var(--spacing-3xl, 24px) var(--spacing-3xl, 24px) 0 var(--spacing-3xl, 24px);
  gap: var(--spacing-xl, 16px);
  justify-content: space-between;
  align-items: center;
  .label {
    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Text lg/Semibold */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-lg, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  }
  svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`;

const UploadContainer = styled.div`
  padding: var(--spacing-xl, 16px) var(--spacing-3xl, 24px) var(--spacing-none, 0) var(--spacing-3xl, 24px);
`;

const UploadContent = styled.div`
  display: flex;
  padding: var(--spacing-xl, 16px) var(--spacing-3xl, 24px);
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg, 12px);
  border-radius: var(--radius-xl, 12px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  position: relative;
  input {
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: 0px;
    left: 0px;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
`;

const UploadImg = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-md, 8px);
  border: 1px solid var(--Component-colors-Components-Icons-Featured-icons-Modern-featured-icon-modern-border, #333741);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs-skeuomorphic */
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
    0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
    0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
`;

const InfoTxt = styled.div`
  color: var(--colors-text-text-tertiary-600, #94969c);
  text-align: center;

  /* Text xs/Regular */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-xs, 12px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--Line-height-text-xs, 18px); /* 150% */
  span {
    color: var(--Component-colors-Components-Buttons-Tertiary-color-button-tertiary-color-fg, #cecfd2);

    /* Text sm/Semibold */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-sm, 14px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }
`;

const Actions = styled.div`
  display: flex;
  padding: var(--spacing-xl, 16px) var(--spacing-3xl, 24px) var(--spacing-3xl, 24px) var(--spacing-3xl, 24px);
  gap: var(--spacing-lg, 12px);
  align-items: center;
  > * {
    width: 100%;
  }
  @media (max-width: 769px) {
    flex-direction: column-reverse;
  }
`;

const CropContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  padding: var(--spacing-xl, 16px) var(--spacing-3xl, 24px) var(--spacing-none, 0) var(--spacing-3xl, 24px);
  box-shadow: 0 20px 24px -4px var(--Colors-Effects-Shadows-shadow-xl_01, rgba(255, 255, 255, 0)),
    0 8px 8px -4px var(--Colors-Effects-Shadows-shadow-xl_02, rgba(255, 255, 255, 0));
`;
