import styled from "styled-components";

export const ProgressIndicator = ({ progress }: { progress: number }) => (
  <ProgressContainer $progress={progress}>
    <div className="track">
      <div className="progress" />
    </div>
  </ProgressContainer>
);
const ProgressContainer = styled.div<{ $progress: number }>`
  height: 8px;
  width: 100%;
  .track {
    background-color: #333741;
    height: 8px;
    width: 100%;
    border-radius: 4px;
    position: relative;
    .progress {
      height: 8px;
      position: absolute;
      z-index: 2;
      width: ${({ $progress }) => `${$progress}%`};
      border-radius: var(--radius-full, 4px);
      background: var(--colors-foreground-fg-brand-primary-600, #00f1e8);
    }
  }
`;
