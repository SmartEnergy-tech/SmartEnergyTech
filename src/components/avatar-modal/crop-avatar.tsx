import { useState, useRef } from "react";
import Cropper from "react-easy-crop";
import styled from "styled-components";

import { getCroppedImg } from "../../utils/image-crop";

interface AvatarCropperProps {
  imageSrc: string; // base64 or URL
  onCropComplete: (croppedImageUrl: string) => void;
  zoom: number;
}

export const AvatarCropper = ({ imageSrc, onCropComplete, zoom }: AvatarCropperProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  const cropTimeout = useRef<NodeJS.Timeout>(undefined);

  const onCropCompleteHandler = (_: any, croppedAreaPixels: any) => {
    clearTimeout(cropTimeout.current);
    cropTimeout.current = setTimeout(() => {
      createCroppedImage(croppedAreaPixels);
    }, 250);
  };

  const createCroppedImage = async (croppedAreaPixels: any) => {
    try {
      const croppedImageUrl = await getCroppedImg(imageSrc, croppedAreaPixels);
      onCropComplete(croppedImageUrl);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={1} // 1:1 ratio
        onCropChange={setCrop}
        onCropComplete={onCropCompleteHandler}
        cropShape="round" // This gives the circular mask
        showGrid={false}
        style={{
          containerStyle: { borderRadius: "12px", width: "100%" },
          cropAreaStyle: {
            border: "2px solid rgba(255,255,255,0.4)",
            boxShadow: "0 0 0 9999px rgba(0,0,0,0.7)",
          },
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 214px;
  position: relative;
  * {
    transition: none;
  }
`;
