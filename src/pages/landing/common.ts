import styled from "styled-components";

export const Title = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);
  text-align: center;

  /* Display sm/Bold */
  font-family: var(--Font-family-font-family-display, Outfit);
  font-size: var(--Font-size-display-sm, 30px);

  font-weight: 700;
  line-height: var(--Line-height-display-sm, 38px); /* 126.667% */
  margin: 0px auto 8px;
  @media (max-width: 769px) {
    font-size: 24px !important;
  }
`;

export const Info = styled.div`
  color: var(--colors-text-text-secondary-700, #cecfd2);
  text-align: center;

  /* Text md/Medium */

  font-weight: 500;

  margin: 0px auto 32px;
  @media (max-width: 769px) {
    flex-direction: column;
    > div {
      width: 100% !important;
    }
  }
`;
