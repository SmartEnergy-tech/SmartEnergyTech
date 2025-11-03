import { useState, type ReactNode } from "react";
import styled from "styled-components";

import InfoIcon from "../assets/info.svg?react";

interface Props {
  info: string | ReactNode;
}

export const InfoTooltip = ({ info }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <StyledInfoIcon onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        i
      </StyledInfoIcon>

      {isHovered && <Popup>{info}</Popup>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-items: center;
`;

const StyledInfoIcon = styled(InfoIcon)`
  cursor: pointer;
`;

const Popup = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  width: 190px;
  z-index: 10;
  text-align: left;
  padding: var(--spacing-lg, 12px);
  border-radius: var(--radius-md, 8px);
  background: var(--Colors-Background-bg-tertiary, #1f242f);
`;
