import { type ReactNode } from "react";
import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  size?: number; // px
  thickness?: number; // px
  color?: string; // css color
  trackColor?: string; // css color
  className?: string;
}

export const Loader = ({
  size = 48,
  thickness = 3,
  color = "currentColor",
  trackColor = "#00C1BA",
  className,
}: SpinnerProps): ReactNode => {
  return (
    <Root className={className} $size={size} aria-busy="true" aria-live="polite">
      <Ring $size={size} $thickness={thickness} $color={color} $track={trackColor} role="progressbar" />
    </Root>
  );
};

export const FullLoader = () => (
  <FullLoaderContainer>
    <Loader />
  </FullLoaderContainer>
);

const FullLoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Root = styled.span<{ $size: number }>`
  display: inline-flex;
`;

const Ring = styled.span<{
  $size: number;
  $thickness: number;
  $color: string;
  $track: string;
}>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  border: ${({ $thickness }) => $thickness}px solid ${({ $track }) => $track};
  border-top-color: ${({ $color }) => $color};
  animation: ${spin} 0.9s linear infinite;
  box-sizing: border-box;
`;
