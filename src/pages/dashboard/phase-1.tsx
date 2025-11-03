import styled from "styled-components";

import { Accordion } from "../../components/accordion";

export const Phase1 = () => {
  return (
    <Accordion
      title={
        <>
          Phase 1 — <span>Foundation & Setup</span>
        </>
      }
    >
      <Content>
        <div>This phase was all about laying the groundwork for SmartEnergy</div>
        <div>✅ Assembled the core team behind the platform</div>
        <div>🧠 Defined the tokenomics and value model of ENGC</div>
        <div>🔐 Built the infrastructure and security for the reward mechanism</div>
      </Content>
    </Accordion>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md, 8px);
  > div {
    /* Text lg/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-lg, 18px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  }
  > div:first-of-type {
    color: var(--colors-text-text-secondary-700, #cecfd2);
  }
  > div:not(div:first-of-type) {
    color: var(--colors-text-text-tertiary-600, #94969c);
  }
`;
