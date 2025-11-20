import { useMemo } from "react";
import styled, { css } from "styled-components";

interface RangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange?: (value: any) => void;
  showValue?: boolean;
  showSteps?: boolean;
}

export const RangeInput = ({ showSteps = false, showValue = false, ...props }: RangeInputProps) => {
  const { onChange, min, max, value, step = 1 } = props;

  const stepsArr = useMemo(() => {
    if (!showSteps) return [];
    const steps = [];
    for (let x = min; x <= max; x += step) {
      steps.push(x);
    }
    return steps;
  }, [showSteps, step, min, max]);

  const valueToPct = (value: number, min: number, max: number) => {
    if (max <= min) return 0;
    return ((value - min) / (max - min)) * 100;
  };

  const pct = useMemo(() => valueToPct(value, min, max), [value, min, max]);

  return (
    <Container $showSteps={showSteps} $showValue={showValue}>
      {showValue && <QuantityValue $pct={pct}>{value}</QuantityValue>}
      <Slider
        {...(props as any)}
        style={{ "--pct": `${pct}%` } as React.CSSProperties}
        type="range"
        onChange={(e) => onChange && onChange(+e.target.value)}
      />
      {showSteps && (
        <StepsIndicators>
          {stepsArr.map((el: number) => (
            <StepIndicator key={el} />
          ))}
        </StepsIndicators>
      )}
    </Container>
  );
};

const Container = styled.div<{ $showSteps?: boolean; $showValue?: boolean }>`
  position: relative;
  width: 100%;
  ${({ $showSteps, $showValue }) => css`
    height: calc(100% + ${$showSteps ? "8px" : "0"} + ${$showValue ? "32px" : "0"});
    padding-top: ${$showValue ? "32px" : "0"};
  `}
`;

const Slider = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  background: transparent;

  -webkit-appearance: none;
  appearance: none;

  /* --- WebKit browsers (Chrome, Edge Chromium, Safari) --- */
  &::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 6px;
    background: linear-gradient(to right, #00f1e8 0%, #00f1e8 var(--pct, 0%), #333741 var(--pct, 0%), #333741 100%);
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #0c111d;
    background: #00f1e8;
    box-shadow: 0 4px 8px -2px rgba(255, 255, 255, 0), 0 2px 4px -2px rgba(255, 255, 255, 0);
    transition: transform 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }

  /* --- Firefox --- */
  &::-moz-range-track {
    height: 8px;
    border-radius: 6px;
    background: #333741;
  }

  &::-moz-range-progress {
    height: 8px;
    border-radius: 6px;
    background: #00f1e8;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #0c111d;
    background: #00f1e8;
    transition: transform 0.2s ease;
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.1);
  }

  /* --- Microsoft Edge Legacy / IE --- */
  &::-ms-track {
    height: 8px;
    border-radius: 6px;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: #00f1e8;
    border-radius: 6px;
  }

  &::-ms-fill-upper {
    background: #333741;
    border-radius: 6px;
  }

  &::-ms-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #0c111d;
    background: #00f1e8;
    margin-top: 0;
    transition: transform 0.2s ease;
  }

  &::-ms-thumb:hover {
    transform: scale(1.1);
  }

  /* focus outline */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 241, 232, 0.35);
    border-radius: 10px;
  }
`;

const QuantityValue = styled.div<{ $pct: number }>`
  position: absolute;
  top: 0;
  left: ${({ $pct }) => `${Math.min(100, Math.max(0, $pct))}%`};
  transform: translateX(${({ $pct }) => `-${Math.min(100, Math.max(0, $pct))}%`});
  pointer-events: none;
  transition: none;
  min-width: 20px;
  height: 28px;
  display: flex;
  justify-content: center;

  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-lg, 18px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-height-text-lg, 28px);

  background: var(--Gradient-Linear-Color-81, linear-gradient(45deg, #4b73ff 0%, #7cf7ff 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StepsIndicators = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 7px 0px 11px;
`;

const StepIndicator = styled.div`
  width: 2px;
  height: 8px;
  border-radius: var(--radius-2xl, 16px);
  background: var(--Colors-Background-bg-tertiary, #1f242f);
`;
