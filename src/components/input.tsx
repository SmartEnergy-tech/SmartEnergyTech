import { useMemo } from "react";
import styled from "styled-components";

interface RangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number;
  min: number;
  max: number;
  step?:number;
  onChange?: (value: any) => void;
}

export const RangeInput = (props: RangeInputProps) => {
  const valueToPct = (value: number, min: number, max: number) => {
    if (max <= min) return 0;
    return ((value - min) / (max - min)) * 100;
  };

  const pct = useMemo(() => valueToPct(props.value, props.min, props.max), [props.value, props.min, props.max]);

  return (
    <Slider
      {...(props as any)}
      style={{ "--pct": `${pct}%` } as React.CSSProperties}
      type="range"
      onChange={(e) => props.onChange && props.onChange(+e.target.value)}
    />
  );
};

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
